import { createTransport } from 'nodemailer'

const TEST_MAIL = 'rahsaan.fay99@ethereal.email'

const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: 'mariano.aquino@gmail.com',
    pass: 'citzejktjilzfrbd',
  },
})

const mailOptions = {
  from: 'Servidor Node.js',
  to: TEST_MAIL,
  subject: 'Mail de prueba desde Node.js',
  html: '<h1 style="color: blue;">Contenido de prueba con archivo adjunto desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
  attachments: [
    {
      // ruta relativa!
      path: './nodemailer.png', //new URL('./nodemailer.png', import.meta.url).pathname,
    },
  ],
}

try {
  const info = await transporter.sendMail(mailOptions)
  console.log(info)
} catch (error) {
  console.log(error)
}
