import { type DefaultValues } from 'react-hook-form';
import { TLoginForm } from './type';

// [Const] Default login form
export const defaultLoginForm: DefaultValues<TLoginForm> = {
  email: '',
  password: '',
  remember: false,
};
