import LoadingWrapper from '@/components/server-loading';
import { Suspense } from 'react';
import PostList from './components/PostList';
import styles from './style.module.scss';

export default function ServerExample() {
  return (
    <div className={styles['server-example-container']}>
      <h2>Server example</h2>
      <div className={styles['post-display']}>
        <Suspense fallback={<LoadingWrapper />}>
          <PostList />
        </Suspense>
      </div>
    </div>
  );
}
