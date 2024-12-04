import { FetchService } from "@/services";
import React from "react";

export default async function PostList() {
  const posts = await FetchService.fetcher("/posts");
  // await new Promise((res) => {
  //   setTimeout(res, 3000);
  // });
  return (
    <div className="post-display">
      {posts?.map((item: { title: string }, index: number) => (
        <div className="post-single" key={index}>
          <span>{index + 1}. </span>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
