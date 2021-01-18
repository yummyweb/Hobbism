import nodemailer from "nodemailer";

export async function sendMail(toEmail: string, url: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
      user: "antriksh.timepass@gmail.com",
      pass: "vermafamily",
    },
  });

  const mailOptions = {
    from: '"Hobbism" <typegraphql@projects.com>',
    to: toEmail,
    subject: "Confirm your account",
    text: "Hel1o from Hobbism",
    html: `<a href="${url}">Go to confirmation link</a>`,
  };

  // Send mail with defined transport object
  const info = await transporter.sendMail(mailOptions);

  console.log("Email sent: " + info.messageId);
  console.log("Preview email: " + nodemailer.getTestMessageUrl(info));
}
