import Head from 'next/head';
import React from 'react';
import { IQueryPostsData, getPosts } from '../../utils';
import { NotFound, PostLists } from '../../components';
import { GetServerSideProps } from 'next';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { useGetPosts } from '../../hooks';

function Blogs() {
  const { data = [], isLoading, isError, error }: IQueryPostsData = useGetPosts();

  const { response } = error ?? {};
  const { data: dataResponse } = response ?? {};
  const { message } = dataResponse ?? {};

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="w-full px-[50px] md:px-[100px]">
        {isError && <div className="text-red-500">{message}</div>}

        {!isError && !isLoading ? <PostLists posts={data}/> : <NotFound />}
      </div>
    </>
  );
}

export default Blogs;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['posts'], getPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

