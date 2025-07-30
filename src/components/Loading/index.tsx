'use client';
import styles from './style.module.scss';
import { useAppSelector } from '@/hooks/redux.hook';

export default function Loading() {
  // [Redux Hook]
  const loadingState = useAppSelector((state) => state.common.loading);

  // [Condition] If loading state is false, return empty component
  if (!loadingState) return <></>;

  //! [JSX Section]
  return (
    <div className={styles['loading-container']}>
      <span className={styles['loader']}></span>
    </div>
  );
}
