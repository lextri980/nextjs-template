import styles from '@/styles/layout/main.module.scss';
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className={styles['main-layout-container']}>{children}</div>;
}
