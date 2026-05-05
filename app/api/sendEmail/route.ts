import nodemailer from 'nodemailer'

export async function POST(req: any) {
  try {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !message || !phone) {
      //we need too add phone to the form
      return new Response(
        JSON.stringify({ error: 'All fields are required.' }),
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: 'info@albertacolourpainting.com',
      replyTo: email,
      subject: `New message from ${name}`,
      text: `You have received a new message from ${name} (${email}).\n\nMessage: ${message}`,
      html: `<p>You have received a new message from <strong>${name}</strong> Email:${email}.Number:${phone}.</p><p><strong>Message:</strong><p>${message}</p>`,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to send email. Try again later.' }),
      { status: 500 }
    )
  }
}
