import * as Yup from "yup";
import { userEmail } from "../../service/User/constants";

export const VALIDATION_SCHEMA = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(userEmail.toLowerCase(), "Email is not valid"),
});
