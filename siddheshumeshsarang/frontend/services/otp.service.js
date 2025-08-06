import nodemailer from 'nodemailer';
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const otpStore = new Map();

function storeOTP(email, otp) {
  otpStore.set(email, { otp, expiresAt: Date.now() + 2 * 60 * 1000 }); // 2 mins
}


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function sendOTPEmail(email, otp) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is ${otp}. It expires in 2 minutes.`,
  };

  return transporter.sendMail(mailOptions);
}