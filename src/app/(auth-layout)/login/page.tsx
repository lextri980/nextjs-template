'use client';
import FormInput from '@/components/form-input';
import { useToast } from '@/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { defaultLoginForm } from './constant';
import { loginSchema } from './schema';
import styles from './style.module.scss';
import { TLoginForm } from './type';

export default function Login() {
  // [Hook] Toaster hook
  const toast = useToast();
  // [Form Hook] Login form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    resolver: yupResolver(loginSchema),
    defaultValues: defaultLoginForm,
  });

  /**
   * Handle login
   */
  const login = () => {
    toast.success('Login successfully');
  };

  //! [JSX Section] -----------------------------------------------------------------
  return (
    <div className={styles['login-container']}>
      <div className={styles['login-form-wrapper']}>
        <p className='text-3xl text-center mb-4'>Login</p>
        <div className='form-group flex flex-col gap-4 justify-center items-center'>
          <FormInput
            control={control}
            label='Email'
            name='email'
            placeholder='Email'
            error={errors && errors.email?.message}
          />
          <FormInput
            control={control}
            label='Password'
            name='password'
            placeholder='Password'
            error={errors && errors.password?.message}
          />
          <div className='w-full flex justify-end'>
            {/* <FormInput control={control} type='checkbox' name='remember' /> */}
            <span>Remember me</span>
          </div>
          <Button onClick={handleSubmit(login)}>Login</Button>
        </div>
      </div>
    </div>
  );
}
