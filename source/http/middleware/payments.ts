import * as router from 'koa-router'
import * as Koa from 'koa'
import DB from '../../db'
import * as _ from 'lodash'
import { ObjectId } from 'bson'
/**
 * Налоговый идентификатор РФ
 */
export type INN = string
/**
 * Налоговый идентификатор Казахстана
 */
export type IIN = string

/**
 * Палтильщтик и получаетель платежа
 */
export interface IPayer {
  personalAccount: string | INN | IIN
}
/**
 * Платеж
 */
export interface IPayment {
  from?: IPayer,
  to?: IPayer,
  operator?: IPayer
  total?: number
  stamp?: Date,
  _id?: any
}
/**
 * Тип отчета
 */
export enum EReportType {
  Dayli = 'dayli',
  Month = 'month',
  Year = 'year'
}

export async function addPamentToReportOrg(
  db: DB,
  payment: IPayment,
  org: IPayer,
  report: EReportType
) {
  const { day, month } = getDateRangeFromPayment(payment);
  let name: string = 'year'
  let value: string = payment.stamp.getFullYear().toString()
  switch (report) {
    case EReportType.Dayli:
      name = 'dayli'
      value = day
      break
    case EReportType.Month:
      name = 'month'
      value = month
      break
  }
  // Dayli report
  await db.getDb().collection(`report_${name}_organization`).updateOne({
    organization: org,
    stamp: value
  }, { $inc: { "value": payment.total } }, { upsert: true })
}

export async function addPamentToSliceReportOrg(
  db: DB,
  payment: IPayment,
  org1: IPayer,
  org2: IPayer,
  report: EReportType
) {
  const { day, month } = getDateRangeFromPayment(payment);
  let name: string = 'year'
  let value: string = payment.stamp.getFullYear().toString()
  switch (report) {
    case EReportType.Dayli:
      name = 'dayli'
      value = day
      break
    case EReportType.Month:
      name = 'month'
      value = month
      break
  }
  // Dayli report
  await db.getDb().collection(`report_slice_${name}_organization`).updateOne({
    organization1: org1,
    organization2: org2,
    stamp: value
  }, { $inc: { "value": payment.total } }, { upsert: true })
}

function getDateRangeFromPayment(payment: IPayment) {
  const day = `${payment.stamp.getFullYear()}-${payment.stamp.getMonth()}-${payment.stamp.getDate()}`;
  const month = `${payment.stamp.getFullYear()}-${payment.stamp.getMonth()}`;
  return { day, month };
}

export async function addPaymentToReportsOrg(
  db: DB,
  payment: IPayment,
  org: IPayer
) {
  // Dayli report
  await addPamentToReportOrg(db, payment, org, EReportType.Dayli)
  // Month report
  await addPamentToReportOrg(db, payment, org, EReportType.Month)
  // Month year
  await addPamentToReportOrg(db, payment, org, EReportType.Year)
}


export async function addPaymentToSliceReportsOrg(db: DB, payment: IPayment, org1: IPayer, org2: IPayer) {
  // Dayli report
  await addPamentToSliceReportOrg(db, payment, org1, org2, EReportType.Dayli)
  // Month report
  await addPamentToSliceReportOrg(db, payment, org1, org2, EReportType.Month)
  // Month year
  await addPamentToSliceReportOrg(db, payment, org1, org2, EReportType.Year)
}

export async function inPaymentHandler(db: DB, payment: IPayment) {
  if (_.isEmpty(payment.from) || _.isEmpty(payment.to) || !payment.total || !payment.stamp) {
    throw new Error('Не верные данные платежа')
  }
  let ex = await db.getDb().collection('payments').findOne(payment)
  if (!ex) {
    // add payment
    const reuslt = await db.getDb().collection('payments').insertOne(payment);
    if (reuslt.result.ok) {
      // push to report
      await addPaymentToReportsOrg(db, payment, payment.to)
      await addPaymentToReportsOrg(db, payment, payment.operator)
      await addPaymentToSliceReportsOrg(db, payment, payment.to, payment.operator)
      // rebuild history
      // update balance
      await updateBalance(db, payment)
    } else {
      throw new Error('Ну удачное добавление платежа')
    }
    return {
      error: false,
      msg: "Платеж добавлен",
      payment: reuslt.insertedId
    }
  } else {
    return {
      error: false,
      msg: "Платеж уже добавлен",
      payment: ex._id
    }
  }
}

export async function undoPaymentHandler(db: DB, payment: IPayment) {
  // check exist payment
  let rem = await db.getDb().collection('payments').findOneAndDelete({ _id: new ObjectId(payment._id) })
  if (!rem.ok) {
    throw new Error("Платеж не найден");

  } else {
    payment = rem.value
    payment.total = -payment.total
    await addPaymentToReportsOrg(db, payment, payment.to)
    await addPaymentToReportsOrg(db, payment, payment.operator)
    await addPaymentToSliceReportsOrg(db, payment, payment.to, payment.operator)
    // rebuild history
    // update balance
    await updateBalance(db, payment)
    return {
      error: false,
      msg: "Платеж удален"
    }
  }
}

export async function updateBalance(db: DB, payment: IPayment) {
  await db.getDb().collection('balance').findOneAndUpdate(
    { payer: payment.from },
    { $inc: { "value": payment.total } },
    { upsert: true }
  )
}

/**
 * Обработчик по HTTP
 * Входящий платеж
 * @param ctx 
 * @param next 
 */
export async function inPayment(
  ctx: Koa.ParameterizedContext<{}, router.IRouterContext> | any,
  next: () => Promise<any>
) {
  const db: DB = _.get(ctx, 'db')
  const body: IPayment = _.get(ctx, 'request.body')
  try {
    ctx.body = await inPaymentHandler(db, body)
  } catch (e) {
    ctx.throw(400, e.message)
  }

}


export async function undoPayment(
  ctx: Koa.ParameterizedContext<{}, router.IRouterContext> | any,
  next: () => Promise<any>
) {
  const db: DB = _.get(ctx, 'db')
  let body: IPayment = _.get(ctx, 'request.body')
  try {
    ctx.body = await undoPaymentHandler(db, body)
  } catch (e) {
    ctx.throw(400, e.message)
  }
}