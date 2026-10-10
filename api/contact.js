const nodemailer = require('nodemailer');

module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, role, message } = req.body;

  try {
    const user = (process.env.SMTP_USER || '').trim();
    const pass = (process.env.SMTP_PASS || '').trim();

    const transporter = nodemailer.createTransport({
      host: (process.env.SMTP_HOST || 'smtp.gmail.com').trim(),
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT.trim()) : 465,
      secure: true,
      auth: {
        user: user,
        pass: pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: 'info@soltikz.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message from the SolTikz contact form:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nRole: ${role}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ success: false, error: 'Failed to send email: ' + error.message });
  }
};
