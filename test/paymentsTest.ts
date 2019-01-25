import { IPayment, IPayer, inPaymentHandler, undoPaymentHandler } from '../source/http/middleware/payments'
import * as db from 'mongo-mock'
import * as DB from '../source/db'
import * as config from '../source/config'
const loggerMock = {
    log: (level, msg) => {
        console.log(level, msg)
    }
}
describe('Payments test', () => {
    let dbClass: DB.default
    before(async () => {
        db.MongoClient.persist = "payments.js"
        dbClass = new DB.default(config.default, loggerMock, db.MongoClient)
        await dbClass.connect()
    })
    it('add new Payment', async () => {
        const payment: IPayment = {
            from: { personalAccount: "1" },
            to: { personalAccount: "2" },
            operator: { personalAccount: "3" },
            total: 323,
            stamp: new Date()
        }
        await inPaymentHandler(dbClass, payment)
        const report = await dbClass.getDb().collection(`report_dayli_organization`).findOne({
            organization: payment.to
        })
    })
    it('add next payment', async () => {
        const payment2: IPayment = {
            from: { personalAccount: "4" },
            to: { personalAccount: "2" },
            operator: { personalAccount: "5" },
            total: 323.2,
            stamp: new Date()
        }
        await inPaymentHandler(dbClass, payment2)
    })
})