const nodemailer = require("nodemailer");

const receiveEmail = async (userEmail, userName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use "hotmail", "yahoo", etc. for other providers
    auth: {
      user: "pataleankush12@gmail.com", // Replace with your email
      pass: "khxawtpuiennjmfd", // Use an app password if using Gmail
    },
  });

  const mailOptions = {
    from: "pataleankush12@gmail.com",
    to: userEmail,
    subject: "Application Received",
    html: `<h2>Hello ${userName},</h2>
           <p>Thank you for applying! We have received your application and will get back to you soon.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
const sendEmail = async (userEmail, userName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use "hotmail", "yahoo", etc. for other providers
    auth: {
      user: "pataleankush12@gmail.com", // Replace with your email
      pass: "khxawtpuiennjmfd", // Use an app password if using Gmail
    },
  });

  const mailOptions = {
    from: "pataleankush12@gmail.com",
    to: userEmail,
    subject: "Application Received",
    html: `<h2>Hello ${userName},</h2>
           <p>Thank you for applying! We have received your application and will get back to you soon.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
