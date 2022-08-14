import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import rightArrow from '../assets/icons/arrow-right.svg';

const Palestras = () => {
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

      <main className="container flex-1 px-2 py-4 justify-center items-center min-w-full w-full h-screen select-none">
        <motion.div
          className="xs:grid-cols-1
					md:w-1/2
					lg:w-3/5
					xl:w-1/2 xl:gap-3
          mx-auto grid gap-x-4 my-auto h-full items-center justify-evenly"
        >
          <div className="grid-cols-11 md:grid-cols-8  justify-center items-center">
            <div className="mx-auto">
              <h3 className="text-xl font-bold text-center mb-0">
                Documentação da API
              </h3>
              <h1 className="text-4xl font-bold text-center mb-2">
                Inteli Blockchain
              </h1>
              <p className="text-md text-center">
                Projeto Blockchain para o Inteli que registra uma carteira para
                cada aluno e mantêm registro de suas atividades no Campus.
              </p>
            </div>
          </div>

          <div className="grid-cols-11 md:grid-cols-8  justify-around">
            <Link href="/estudante">
              <motion.div
                className="text-md md:text-xl p-4 bg-gray-200 rounded-lg shadow-lg text-red-500 cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  y: -2.5,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="mx-auto">Estudante</span>
                <p className="text-sm ml-4">
                  Métodos referenciados aos estudantes:
                  <br />- Criação de carteira;
                  <br />- Ver o endereço da carteira;
                  <br />- Ver RA do estudante;
                  <br />- Remover estudante
                </p>
              </motion.div>
            </Link>

            <Link href="/campus">
              <motion.div
                className="text-md md:text-xl p-4 bg-gray-200 rounded-lg shadow-lg text-red-500 my-4 cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  y: -2.5,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="mx-auto">Acesso ao campus</span>
                <p className="text-sm ml-4">
                  Métodos referenciados aos estudantes:
                  <br />- Criação de carteira;
                  <br />- Ver o endereço da carteira;
                  <br />- Ver RA do estudante;
                  <br />- Remover estudante
                </p>
              </motion.div>
            </Link>

            <Link href="/palestras">
              <motion.div
                className="text-md md:text-xl p-4 bg-gray-200 rounded-lg shadow-lg text-red-500 cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  y: -2.5,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="mx-auto">Palestras</span>
                <p className="text-sm ml-4">
                  Métodos referenciados aos estudantes:
                  <br />- Criação de carteira;
                  <br />- Ver o endereço da carteira;
                  <br />- Ver RA do estudante;
                  <br />- Remover estudante
                </p>
              </motion.div>
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <Link href="/estudante">
              <motion.button
                className="bg-black text-white font-bold py-2 px-4 rounded-md mx-auto flex justify-between shadow-md"
                whileHover={{
                  scale: 1.1,
                  y: -2.5,
                  transition: { duration: 0.2 },
                }}
              >
                <span className="mr-2">Início da documentação</span>
                <Image
                  className="ml-2"
                  src={rightArrow}
                  height={24}
                  width={24}
                />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Palestras;
