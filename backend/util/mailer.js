const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const { to, subject } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // or 'STARTTLS'
      auth: {
        user: "devkayasth1611@gmail.com",
        pass: "fatd kdha mlbu kpja",
      },
      // logger: true,
      // debug: true,
    });

    const mailOptions = {
      from: "devkayasth1611@gmail.com",
      to,
      subject,
      text: 'heyy..!! This is Dev here.',
      html:`<html>
            <head>
              <style>
              body {
                background-color: lightblue;
                color:blue;
              }
              </style>
            </head>
            <body>
              <h1>This is Dev here..!!</h1>
            </body>
          </html>`,
    };

    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully!");
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send({ message: "Error sending email" });
  }
};

module.exports = sendMail;