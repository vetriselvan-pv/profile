import { body } from "express-validator";

export const validateEmail = [
  body("email").isEmail(),
  body("message").isLength({ min: 10, max: 5000 }),
];