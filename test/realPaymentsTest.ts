//mongodb://test:test123@ds113375.mlab.com:13375/hazpro-test
import { IPayment, IPayer, inPaymentHandler, undoPaymentHandler, withdrawHandler } from '../source/http/middleware/payments'
import payments = require('./assets/payments_test_1.json');
import * as DB from '../source/db'
import * as config from '../source/config'
import { expect } from 'chai'
const loggerMock = {
  log: (level, msg) => {
    console.log(level, msg)
  }
}
describe('Real Payments', () => {
  let dbClass: DB.default
  let paymentId
  before(async () => {
    config.default.db.url = 'mongodb://test:test123@ds113375.mlab.com:13375/hazpro-test'
    config.default.db.name = 'hazpro-test'
    dbClass = new DB.default(config.default, loggerMock)
    await dbClass.connect()
    dbClass.getDb().dropCollection('payments')
    dbClass.getDb().dropCollection('balance')
    dbClass.getDb().dropCollection('report_dayli_organization')
    dbClass.getDb().dropCollection('report_month_organization')
    dbClass.getDb().dropCollection('report_year_organization')
    dbClass.getDb().dropCollection('report_slice_year_organization')
    dbClass.getDb().dropCollection('report_slice_month_organization')
    dbClass.getDb().dropCollection('report_slice_dayli_organization')
    dbClass.getDb().dropCollection('payment_history')
  })
  it('test add ', async () => {
    const data: Array<any> = payments
    const wPay = data.map(x => {
      return inPaymentHandler(dbClass, x)
    })
    const s = await Promise.all(wPay)
    paymentId = DB.default.toObjectId(s[0].payment)
    const doc = await dbClass.getDb().collection('payments').findOne({ _id: paymentId })
    const balance = await dbClass.getDb()
      .collection('balance')
      .findOne({ "payer.personalAccount": doc.from.personalAccount })
    expect(balance.value).eq(10850)
    const orgD = await dbClass.getDb()
      .collection('report_dayli_organization')
      .findOne({ "organization.personalAccount": "11", "stamp": "2016-4-31" })
    expect(orgD.value).eq(700)
    const orgM = await dbClass.getDb()
      .collection('report_month_organization')
      .findOne({ "organization.personalAccount": "11", "stamp": "2015-7" })
    expect(orgM.value).eq(700)
    const orgY = await dbClass.getDb()
      .collection('report_year_organization')
      .findOne({ "organization.personalAccount": "11", "stamp": "2016" })
    expect(orgY.value).eq(8650)
  })
  it('test undo', async () => {
    const s = await dbClass.getDb().collection('payments').findOne({ _id: paymentId })
    const orgD2 = await dbClass.getDb()
      .collection('report_dayli_organization')
      .findOne({ "organization.personalAccount": "11", "stamp": "2014-7-1" })
    expect(orgD2.value).eq(700.25)
    await undoPaymentHandler(dbClass, { _id: paymentId })
    const balance = await dbClass.getDb()
      .collection('balance')
      .findOne({ "payer.personalAccount": s.from.personalAccount })
    expect(balance.value).eq(10500)
    const orgD = await dbClass.getDb()
      .collection('report_dayli_organization')
      .findOne({ "organization.personalAccount": "11", "stamp": "2014-7-1" })
    expect(orgD.value).eq(700.25)
    const orgM = await dbClass.getDb()
      .collection('report_month_organization')
      .findOne({ "organization.personalAccount": "11", "stamp": "2015-7" })
    expect(orgM.value).eq(700)
    const orgY = await dbClass.getDb()
      .collection('report_year_organization')
      .findOne({ "organization.personalAccount": "11", "stamp": "2016" })
    expect(orgY.value).eq(8650)
  })
  it('test fee', async () => {
    const fee: IPayment = {
      "stamp": new Date("2018-03-28 21:00:00"),
      "to": { "personalAccount": "11" },
      "from": { "personalAccount": "794937" },
      "total": -350
    }
    await withdrawHandler(dbClass, fee)
    const balance = await dbClass.getDb().collection('balance').findOne({ "payer.personalAccount": "794937" })
    expect(balance.value).eq(11549 - 350)
    const orgD = await dbClass.getDb()
      .collection('report_dayli_organization')
      .findOne({ "organization.personalAccount": "11", "stamp": "2014-7-1" })
    expect(orgD.value).eq(700.25)
    const orgM = await dbClass.getDb()
      .collection('report_month_organization')
      .findOne({ "organization.personalAccount": "11", "stamp": "2018-2" })
    expect(orgM.value).eq(700)
    const orgY = await dbClass.getDb()
      .collection('report_year_organization')
      .findOne({ "organization.personalAccount": "11", "stamp": "2016" })
    expect(orgY.value).eq(8650)
    // 11549
  })
})