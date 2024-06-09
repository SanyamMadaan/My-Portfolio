const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    const { email,name, subject, message,} = req.body;

    console.log(process.env.user);
    console.log(process.env.pass);

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        service: 'gmail',
        auth: {
            user: process.env.user, // Your Gmail email address
            pass: process.env.pass // Your Gmail password
        }
    });

    // Define email options
    let mailOptions = {
        from: email, // Sender email address
        to: 'sanyammadaan002@gmail.com', // Your email address
        subject: subject,
        text: `Name: ${name}\nSender Email: ${email}\nSubject: ${subject}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error: Failed to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
};

module.exports = sendEmail;