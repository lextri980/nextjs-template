/**
 * [Type] Global Auth state
 */
export type TAuthState = {
  message: string;
  loading: boolean;
};

/**
 * [Type] Login form data
 */
export type TLoginBodyReq = {
  email: string;
  password: string;
  remember?: boolean;
};
