import * as yup from "yup";

const emailTooLong = "Email length can not exceed 255 characters.";
const passwordNotLongEnough = "Password must be at least 5 characters.";
const passwordTooLong = "Password length can not exceed 255 characters.";
const invalidEmail = "Email must be a valid email.";
const emailNotLongEnough = "Email must be at least 5 characters.";

export const emailValidation = yup
  .string()
  .min(5, emailNotLongEnough)
  .max(255, emailTooLong)
  .email(invalidEmail)
  .required();

export const passwordValidation = yup
  .string()
  .min(5, passwordNotLongEnough)
  .max(255, passwordTooLong)
  .required();
