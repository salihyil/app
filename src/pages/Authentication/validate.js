import * as Yup from "yup";

export const VALIDATION_SCHEMA = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches("sincere@april.biz", "Please enter a valid email"),
});
