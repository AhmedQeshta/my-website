import Head from 'next/head';
import React from 'react';
import { IPostsProps, getPosts, graphCMS } from '../../utils';
import { NotFound, PostLists } from '../../components';

function Blogs({ posts }: IPostsProps) {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="w-full px-[50px] md:px-[100px]">
         {!!posts.length ?<PostLists posts={posts}/>: <NotFound/>}
      </div>
    </>
  );
}

export default Blogs;

export async function getStaticProps() {
  const { posts } = await graphCMS.request(getPosts);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
