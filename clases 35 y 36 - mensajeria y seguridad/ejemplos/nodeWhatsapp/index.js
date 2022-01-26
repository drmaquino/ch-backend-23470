import twilio from 'twilio'

const accountSid = 'AC429651f99e462fbfa8dcd49223746d53'
const authToken = 'e61430fef982e85c83c6f89f0b583380'

const client = twilio(accountSid, authToken)

const options = {
  body: 'Hola soy un WSP desde Node.js para Coderhouse (vie 21/01/2022)!',
  mediaUrl: [
    'https://www.investingmoney.biz/public/img/art/xl/18012019161021Twilio-IoT.jpg',
  ],
  from: 'whatsapp:+14155238886',
  to: 'whatsapp:+5491137783394',
}

try {
  const message = await client.messages.create(options)
  console.log(message)
} catch (error) {
  console.log(error)
}
