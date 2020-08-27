import { utils } from '../assets/utils/util.js'

export const mailService = {
    query,
    getMailById
}


var mails = [
    { id: utils.makeId(), sender: 'Adam', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'Shimon', subject: 'Meeting', body: 'Are you comming ?', isRead: true, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'PANDORA', subject: 'Promosion', body: 'Ther is A great SALE today!!', isRead: false, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'Collage', subject: 'New PaymentBill', body: 'The new Payment for the new academic year', isRead: true, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'MY Sister', subject: 'family visiting', body: 'Do you Want to go and see dad ?', isRead: false, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'Pet Shop', subject: 'Lost & Founds', body: 'We Found Your Wallet, Please inform us if you attend to come and get it!', isRead: false, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'THE OFFICE', subject: 'MY UGLY BOSS', body: 'YOU ARE FIRED!!!', isRead: true, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'Travel Agency', subject: 'BAHAMAS', body: 'A NEW offer for the BAHMAS TRIP. Click here If you Do not see the Email', isRead: false, sentAt: 1551133930594 },
]


function query() {
    return Promise.resolve(mails);
}


function getMailById(id) {
    const mail = mails.find(mail => mail.id === id)
    return Promise.resolve(mail)
}