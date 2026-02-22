import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config({ path: join(__dirname, '.env') })

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001
const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || GMAIL_USER

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD
  }
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, subject, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email and message are required' })
    }

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      return res.status(500).json({
        success: false,
        message: 'Email not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD in server/.env'
      })
    }

    const mailOptions = {
      from: GMAIL_USER,
      to: RECIPIENT_EMAIL,
      subject: `Contact Form: ${subject || 'General Inquiry'}`,
      html: `
        <h2>New message from TechVision contact form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '-'}</p>
        <p><strong>Company:</strong> ${company || '-'}</p>
        <p><strong>Subject:</strong> ${subject || '-'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    }

    await transporter.sendMail(mailOptions)
    res.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to send message'
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
