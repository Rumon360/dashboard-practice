import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import MainSection from '../components/MainSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col md:flex-row">
        <Sidebar />
        <MainSection />
      </main>
    </div>
  );
}
