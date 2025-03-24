import nodemailer from 'nodemailer';

export async function sendVerificationEmail(email, verificationLink) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use App Password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify Your Email',
    html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
  };

  await transporter.sendMail(mailOptions);
}
