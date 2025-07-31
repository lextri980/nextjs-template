import styles from './style.module.scss';

export default function ServerLoading() {
  //! [JSX Section]
  return (
    <div className={styles['loading-container']}>
      <span className={styles['loader']}></span>
    </div>
  );
}
