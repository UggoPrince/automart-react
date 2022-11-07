import type { NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Header from '../layouts/home/header';
// import styles from '../styles/Home.module.css';
import { BaseLayout } from '../layouts/base-layout';
import Backdrop from '../components/background/backdrop';
import BgImage from '../components/background/bg-image';
import { getCars, Cars } from '../data/cars';
// import { BodyLayout } from '../layouts/body-layout';
import HomeBody from '../layouts/home/body';
import { Card } from '../components/card';

const Home: NextPage = (props) => {
  const { cars }: any = props;
  return (
    <BaseLayout>
      <Head>
        <title>Automart - Home</title>
        <meta name="description" content="Advertise your car on automart" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <BgImage>
        <Header/>
        <Backdrop>
          <main className='h-screen block box-border pt-[66px] overflow-y-auto px-5'>
            <div className='w-full
              min-h-full
              grid
              grid-cols-1
              sm:grid-cols-1
              md:grid-cols-2
              lg:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              place-content-start
              py-5
              gap-8
              box-border'
            >
              {cars.map((car: any) => {
                return <Card car={car} key={car._id} />;
              })}
            </div>
          </main>
        </Backdrop>
      </BgImage>
    </BaseLayout>
  )
}

Home.getInitialProps = getCars;

export default Home
