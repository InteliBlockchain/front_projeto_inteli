import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import useSWR from 'swr';

import data from '../assets/data.json';
import content from '../assets/content.json';

import { Card } from '../components/Cards';
import rightArrow from '../assets/icons/arrow-right.svg';

const Docs = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { info, item } = content;

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  console.log(content);

  const requisition = {
    method: 'POST',
    routeFunction: 'Criar Wallet para o estudante',
    desc: 'Rota que recebe o RA do aluno e executa a função "createStudent" do contrato "InteliFactory"',
    url: '{{url}}/student/create',
    headers: [
      {
        name: 'Authorization',
        value: 'Bearer 2-H7-A!u.nSz-)<Z/NQPV:gV$}Ny]f',
      },
    ],
    body: {
      ra: '2022.2A.02',
    },
  };

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

            {data.map((item) => (
              <Card {...item} key={item.body.ra} />
            ))}
            {/* doc card */}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Docs;
