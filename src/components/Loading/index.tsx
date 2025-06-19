import styles from './style.module.scss';

export default function Loading() {
  return (
    <div className={styles['loading-container']}>
      <span className={styles['loader']}></span>
    </div>
  );
}
