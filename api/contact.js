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
      from: `"SolTikz Website" <${user}>`,
      replyTo: email,
      to: 'info@soltikz.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message from the SolTikz contact form:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nRole: ${role}\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="background-color: #0A0733; padding: 20px; text-align: center;">
            <h2 style="color: #0FD4DC; margin: 0; font-size: 22px; letter-spacing: 0.5px;">New Contact Request</h2>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <p style="color: #555; font-size: 15px; margin-top: 0; margin-bottom: 25px;">You have received a new message from the <strong>SolTikz</strong> website.</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; width: 100px;"><strong style="color: #333;">Name</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #111;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong style="color: #333;">Email</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #6C63FF; text-decoration: none; font-weight: 500;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong style="color: #333;">Phone</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #111;">${phone || '<span style="color:#999">Not provided</span>'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><strong style="color: #333;">Role</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #111;">${role || '<span style="color:#999">Not specified</span>'}</td>
              </tr>
            </table>

            <div style="margin-top: 30px;">
              <strong style="color: #333; display: block; margin-bottom: 10px; font-size: 15px;">Message Details:</strong>
              <div style="background-color: #f8f9fa; padding: 20px; border-left: 4px solid #0FD4DC; border-radius: 4px; color: #333; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          <div style="background-color: #f4f5f7; padding: 15px; text-align: center; color: #888; font-size: 12px; border-top: 1px solid #eee;">
            This email was generated automatically by the SolTikz web platform.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ success: false, error: 'Failed to send email: ' + error.message });
  }
};
