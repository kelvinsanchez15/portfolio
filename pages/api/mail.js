const sgMail = require("@sendgrid/mail");

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  if (req.method === "POST") {
    const { firstName, lastName, email, message } = req.body;

    const msg = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: `PORTFOLIO: ${firstName} ${lastName} sent you a message!`,
      text: `
          Email: ${email}
          Message: ${message}`,
    };

    try {
      await sgMail.send(msg);

      console.log("Message sent");
      res.status(200).end();
    } catch (error) {
      console.log("ERROR SENDING EMAIL VIA SENDGRID: ", error);
      res.status(500).json(error.message);
    }
  }

  res.status(200).end();
};
