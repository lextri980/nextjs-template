import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email("Email form").required("Required field"),
  password: yup.string().required("Required field"),
  remember: yup.boolean().optional(),
});
