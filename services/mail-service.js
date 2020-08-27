import { utils } from '../assets/utils/util.js'

export const mailService = {
    query,
    getMailById,
    toDeleteMails,
    addMail,
    getEmptyMail
}


let gMails = [
    { id: utils.makeId(), sender: 'Adam', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'Shimon', subject: 'Meeting', body: 'Are you comming ?', isRead: true, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'PANDORA', subject: 'Promosion', body: 'Ther is A great SALE today!!', isRead: false, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'Collage', subject: 'New PaymentBill', body: 'The new Payment for the new academic year', isRead: true, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'MY Sister', subject: 'family visiting', body: 'Do you Want to go and see dad ?', isRead: false, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'Pet Shop', subject: 'Lost & Founds', body: 'We Found Your Wallet, Please inform us if you attend to come and get it!', isRead: false, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'THE OFFICE', subject: 'MY UGLY BOSS', body: 'YOU ARE FIRED!!!', isRead: true, sentAt: 1551133930594 },
    { id: utils.makeId(), sender: 'Travel Agency', subject: 'BAHAMAS', body: 'A NEW offer for the BAHMAS TRIP. Click here If you Do not see the Email', isRead: false, sentAt: 1551133930594 },
]


let deletedMails = [];


function query() {
    return Promise.resolve(gMails);
}


function getMailById(id) {
    const mail = gMails.find(mail => mail.id === id)
    return Promise.resolve(mail)
}

function toDeleteMails(mails) {
        deletedMails = deletedMails.concat(mails);
    
    for(var i=0  ; i<mails.length  ; i++) {
        gMails = gMails.filter(mail => mail.id!==mails[i].id)
    }

    console.log(deletedMails);
}


function addMail(mail) {
   const newMail= _createMail(mail)
    console.log('mail is added',newMail);
    gMails.unshift(newMail);
    console.log('this is the new mails list', gMails);
}

function _createMail(mail) {
    const newMail = {
        id : utils.makeId(),
        sender : mail.to,
        subject : mail.subject,
        body : mail.body,
        isRead : true,
        sentAt : Date.now()
    }
    return newMail;
}

function getEmptyMail() {
    const mail = { to: '', subject: '', body: ''};
    return mail;
}