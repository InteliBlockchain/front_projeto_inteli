import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

import content from '../assets/content.json';

import { Card } from '../components/Cards';
import rightArrow from '../assets/icons/arrow-right.svg';

const Docs = () => {
  const { info, item } = content;

  return (
    <div>
      <Head>
        <title>Inteli Blockchain - API Docs</title>
        <meta
          name="description"
          content="Inteli Blockchain API Documentation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex-1 px-2 py-4 justify-center items-center min-w-full w-full h-screen">
        <motion.div
          className="xs:grid-cols-1
					md:w-2/3
					lg:w-3/5
					xl:w-1/2 xl:gap-3
          mx-auto flex flex-col gap-x-4 my-auto h-full items-center justify-start"
        >
          <Link href="/">
            <div className="grid-cols-11 md:grid-cols-8  justify-center items-center ">
              <div className="mx-auto">
                <h3 className="text-xl font-bold text-center mb-0">
                  Documentação da API
                </h3>
                <h1 className="text-2xl font-bold text-center mb-2">
                  {info.name}
                </h1>
              </div>
            </div>
          </Link>

          <div className="grid-cols-11 md:grid-cols-8  w-full">
            <div className="mx-auto">
              <h1 className="text-3xl font-bold">Estudante</h1>
            </div>

            <hr className="my-4" />

            {item[0].item.map((item) => (
              <Card {...item} />
            ))}

            <hr className="my-8" />

            <div className="mx-auto">
              <h1 className="text-3xl font-bold">Acesso ao Campus</h1>
            </div>

            <hr className="my-4" />

            {item[1].item.map((item) => (
              <Card {...item} />
            ))}

            <hr className="my-8" />

            <div className="mx-auto">
              <h1 className="text-4xl font-bold">Acesso ao Campus</h1>
            </div>

            <hr className="my-4" />

            {item[2].item.map((item) => (
              <Card {...item} />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Docs;
