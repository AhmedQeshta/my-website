import Head from 'next/head';
import React from 'react';
import { IPostsProps, getPosts, graphCMS } from '../../utils';
import { PostLists } from '../../components';

function Blogs({ posts }: IPostsProps) {
  return (
    <>
      <Head>
        <title>Ahmed Qeshta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full px-[50px] md:px-[100px]">
        <PostLists posts={posts}/>
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
