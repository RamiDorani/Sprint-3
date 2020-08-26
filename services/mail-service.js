import {utils} from '../assets/utils/util.js'

export const mailService = {
    query
}


var mails = [
    {id: utils.makeId() ,subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    {id: utils.makeId() ,subject: 'Meeting', body: 'Are you comming ?', isRead: false, sentAt : 1551133930594},
    {id: utils.makeId() ,subject: 'Promosion', body: 'Ther is A great SALE today!!', isRead: false, sentAt : 1551133930594},
    {id: utils.makeId() ,subject: 'Collage', body: 'New PaymentBill', isRead: false, sentAt : 1551133930594},
    {id: utils.makeId() ,subject: 'MY Sister', body: 'Do you Want to go and see dad ?', isRead: false, sentAt : 1551133930594},
    {id: utils.makeId() ,subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    {id: utils.makeId() ,subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
    {id: utils.makeId() ,subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
]


function query() {
    return Promise.resolve(mails);
}
