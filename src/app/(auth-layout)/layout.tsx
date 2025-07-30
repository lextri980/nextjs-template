import styles from '@/styles/layout/auth.module.scss';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className={styles['auth-layout-container']}>{children}</div>;
}
