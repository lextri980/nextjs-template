'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/redux.hook';
import { CommonActions } from '@/stores/common-store/common.reducer';
import { ExampleActions } from '@/stores/example-store/example.reducer';
import { useEffect } from 'react';
import styles from './style.module.scss';

function Example() {
  // [Redux Hook]
  const exampleState = useAppSelector((state) => state.example);
  const dispatch = useAppDispatch();

  /**
   * [Effect]
   * Set loading state
   */
  useEffect(() => {
    dispatch(CommonActions.setLoading(exampleState.loading));
  }, [exampleState]);

  /**
   * [Effect]
   * Mounted component
   */
  useEffect(() => {
    dispatch(ExampleActions.getPostRequest());
  }, []);

  return (
    <div className={styles['example-container']}>
      Example page
      <div className={styles['post-display']}>
        {exampleState.postList?.map((item, index) => (
          <div className={styles['post-single']} key={index}>
            <span>{index + 1}.</span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Example;
