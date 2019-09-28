import * as yup from "yup";

const emailTooLong = "Email length can not exceed 255 characters.";
const invalidEmail = "Email must be a valid email.";
const emailNotLongEnough = "Email must be at least 5 characters.";
const requiredEmail = "Email is a required field";
const passwordNotLongEnough = "Password must be at least 5 characters.";
const passwordTooLong = "Password length can not exceed 255 characters.";
const requiredPassword = "Password is a required field";
const requiredConfirmPassword = "Confirm Password is a required field";

export const emailValidation = yup
  .string()
  .min(5, emailNotLongEnough)
  .max(255, emailTooLong)
  .email(invalidEmail)
  .required(requiredEmail);

export const passwordValidation = yup
  .string()
  .min(5, passwordNotLongEnough)
  .max(255, passwordTooLong)
  .required(requiredPassword);

export const confirmPasswordValidation = yup
  .string()
  .oneOf([yup.ref("password")], "Passwords do not match")
  .required(requiredConfirmPassword);
