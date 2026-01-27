import dotenv from 'dotenv';
import express from 'express';
import { emailLimiter } from './middleware/rateLimiter.js';
import { validateEmail } from './middleware/validate.js';
import { validationResult } from 'express-validator';
import { transporter } from './mailer.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.URL,
  }),
);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

app.post(
  '/api/contact',
  emailLimiter,
  validateEmail,
  async (req: express.Request, res: express.Response) => {
    try {
      const { email, message,name , subject, company } = req.body;
      if (company) {
        return res.json({ success: true });
      }
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      await transporter.sendMail({
        from: `${name} <${email}>`,
        to: process.env.TOEMAIL,
        subject: 'From the portfolio',
        text: message,
      });
      return res.status(200).json('Message Sent Succesfully');
    } catch (err) {
      return res.status(500).json('Internal Server Error');
    }
  },
);

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
else {
  module.exports = app;
}