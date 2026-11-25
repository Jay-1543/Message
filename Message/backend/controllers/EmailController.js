const nodemailer = require("nodemailer");
 
const sendEmail = async (req, res) => {
    try {
        const { to, subject, message } = req.body;
 
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
 
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text: message
        };
 
        await transporter.sendMail(mailOptions);
 
        res.status(200).json({
            message: "Email Sent Successfully"
        });
 
    } catch (error) {
        console.error("Email Error:", error);
 
        res.status(500).json({
            message: error.message
        });
    }
};
 
module.exports = { sendEmail };
 