import { FetchService } from '@/services';

export default async function PostList() {
  const postsPromise = FetchService.fetcher('/posts');
  const waiter = new Promise((res) => {
    setTimeout(res, 5000);
  });

  const [posts] = await Promise.all([postsPromise, waiter]);
  return (
    <div className='post-display'>
      {posts?.map((item: { title: string }, index: number) => (
        <div className='post-single' key={index}>
          <span>{index + 1}. </span>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
