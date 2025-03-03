// pages/api/instagram.js
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Replace these with your actual Instagram Graph API credentials
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
    const userId = process.env.INSTAGRAM_USER_ID

    // Instagram Graph API URL
    const url = `https://graph.instagram.com/${psufigureskating}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`

    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error('Failed to fetch from Instagram API')
    }

    const data = await response.json()
    return res.status(200).json(data)
  } catch (error) {
    console.error('Instagram API error:', error)
    return res.status(500).json({ message: 'Failed to fetch Instagram feed', error: error.message })
  }
}

// pages/api/tiktok.js
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    // Replace these with your actual TikTok API credentials
    const accessToken = process.env.TIKTOK_ACCESS_TOKEN
    
    // TikTok API URL - This will depend on the TikTok API you're using
    // TikTok now offers a content/creator API for business accounts
    const url = `https://open-api.tiktok.com/video/list/?access_token=${accessToken}&fields=id,cover_image_url,share_url,title,create_time`

    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error('Failed to fetch from TikTok API')
    }

    const data = await response.json()
    return res.status(200).json(data)
  } catch (error) {
    console.error('TikTok API error:', error)
    return res.status(500).json({ message: 'Failed to fetch TikTok feed', error: error.message })
  }
}

// pages/api/contact.js
import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  try {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or another service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'psufigureskating@psu.edu', // Your team's email
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #041e42;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3 style="color: #1a3c7f;">Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Return success