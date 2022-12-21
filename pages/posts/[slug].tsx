import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import { IQueryPostData, ISinglePostParams, getPost } from '../../utils';
import Image from 'next/image';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { useGetPost } from '../../hooks';
import { useMemo } from 'react';

const NotFound = dynamic(() => import('../../components/ui/NotFound'), {
  loading: () => <div>Loading...</div>,
});

function Article({ dehydratedState }: any) {
  const { queries } = dehydratedState ?? {};
  const slug = useMemo(() => queries[0].queryKey[1], [queries]);

  const { data, isLoading, isError }: IQueryPostData = useGetPost(slug);

  const { title = '', caver, content, author, datePublished } = data ?? {};
  const { url, width, height } = caver ?? {};
  const { name, avatar } = author ?? {};

  if (isError || !data) {
    return <NotFound />;
  }

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="w-full px-[50px] lg:px-[100px] xl:px-[300px]">
        {!isLoading ? (
          <>
            <Image
              className="w-full h-[60vh] object-fill rounded-md mb-5 bg-slate-200"
              src={url}
              width={width}
              height={height}
              alt={title}
            />

            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Image
                    className="rounded-full w-10 object-cover"
                    src={avatar?.urlAuthor}
                    width={avatar?.widthAuthor}
                    height={avatar?.heightAuthor}
                    alt={name}
                  />
                  <h6>{name}</h6>
                </div>

                <p className="text-sm">{datePublished}</p>
              </div>

              <h1 className="text-4xl font-bold my-5 capitalize">{title}</h1>
            </div>

            <div dangerouslySetInnerHTML={{ __html: content?.html }} />
          </>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async ({ params }: ISinglePostParams) => {
  const { slug } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['post', slug], () => getPost({ slug }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Article;
