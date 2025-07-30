import * as yup from 'yup';

// [Schema] Validate for login form
export const loginSchema = yup.object().shape({
  email: yup.string().email('Email form').required('Required field'),
  password: yup.string().required('Required field'),
});
