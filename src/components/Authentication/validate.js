import * as Yup from "yup";

export const VALIDATION_SCHEMA = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .max(17)
    .matches("sincere@april.biz", "Please enter a valid email"),
});
