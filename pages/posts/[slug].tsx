import Head from 'next/head';
import React from 'react';
import { getPost, graphCMS, IPost, ISinglePostParams, slugList } from '../../utils';
import Image from 'next/image';

function Article({ post }: IPost) {
  const { title, caver, content, author, datePublished } = post ?? {};
  const { url, width, height } = caver ?? {};
  const { name, avatar } = author ?? {};

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="w-full px-[50px] md:px-[350px]">
        <Image
          className="w-full h-[40vh] object-cover rounded-md mb-5"
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
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const { posts } = await graphCMS.request(slugList);
  return {
    paths: posts?.map(({ slug }: { slug: string }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: ISinglePostParams) {
  const { slug } = params;

  const { post } = await graphCMS.request(getPost, { slug });

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default Article;
