import React from 'react';
import { IPostsProps } from '../../utils';
import PostCard from './PostCard';

function PostLists({ posts }: IPostsProps): JSX.Element {
  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-4 lg:grid-cols-4 gap-5">
      {posts?.map((post) => (
        <PostCard post={post} key={post?.id} />
      ))}
    </div>
  );
}

export default PostLists;
