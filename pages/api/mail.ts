import sgMail from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function mail(req: NextApiRequest, res: NextApiResponse) {
  if (
    !process.env.SENDGRID_API_KEY ||
    !process.env.TO_EMAIL ||
    !process.env.FROM_EMAIL
  ) {
    return res.status(500).json({
      message: `ERROR SENDING EMAIL VIA SENDGRID: Check your enviroment variable config`,
    });
  }
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  if (req.method === 'POST') {
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
      return res.status(200).end();
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({
          message: `ERROR SENDING EMAIL VIA SENDGRID: ${error.message}`,
        });
      }
    }
  }
  return res.status(200).end();
}
