import { rateLimit } from 'express-rate-limit'; 


export const emailLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many requests, please try again later',
    standardHeaders: true,
    legacyHeaders: false, 
});