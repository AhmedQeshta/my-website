import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

function NotFound() {
  return (
    <>
      <Head>
        <title>Not Found - 404</title>
      </Head>
      <div className="w-full h-[75vh] text-center flex justify-center items-center flex-col">
        <Image
          className="w-full h-[40vh] object-contain mb-[15px]"
          src="/assets/images/not-found.svg"
          width={250}
          height={250}
          alt="404"
          priority
        />
        <h1 className="text-4xl font-bold my-5">Not Found any Post</h1>
        <p className="text-sm">Came back to the home page</p>
      </div>
    </>
  );
}

export default NotFound;
