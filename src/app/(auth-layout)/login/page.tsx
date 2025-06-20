'use client';
import { useToast } from '@/hooks';
import Link from 'next/link';
import styles from './style.module.scss';

export default function Login() {
  const toast = useToast();
  const displaySonner = () => {
    toast.success();
  };

  return (
    <div className={styles['login-container']}>
      <Link href='/register'>Login</Link>
      <br />
      <button onClick={displaySonner}>Click</button>
      <button onClick={() => toast.dismiss()}>Close</button>
    </div>
  );
}
