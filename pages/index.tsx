import type { NextPage } from 'next';
import Head from 'next/head';
import { ThreeDLogo } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ahmed Qeshta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-between items-center w-full px-[50px] py-[40px] md:px-[100px] md:py-[80px] h-[50vh] flex-col md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="md:text-[60px] text-[45px] font-bold">Hi I'm Ahmed Qeshta</h2>
          <p className="md:text-[25px]  text-[20px] font-bold ">I'm a Full Stack Developer</p>
        </div>
        <div className="flex flex-col items-center md:items-start h-[350px] w-100">
          <ThreeDLogo />
        </div>
      </div>
    </>
  );
};

export default Home;
