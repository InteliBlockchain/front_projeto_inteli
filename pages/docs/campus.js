import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import rightArrow from '../../assets/icons/arrow-right.svg';

const Campus = () => {
  return (
    <main className="container flex-1 px-2 py-4 justify-center items-center min-w-full w-full h-screen select-none">
      <motion.div
        className="xs:grid-cols-1
					md:w-1/2
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
                Inteli Blockchain
              </h1>
            </div>
          </div>
        </Link>

        <div className="grid-cols-11 md:grid-cols-8  w-full">
          <div className="mx-auto">
            <h1 className="text-3xl font-bold">Estudante</h1>
          </div>

          <hr className="my-4" />

          {/* doc card */}
          <div className="grid-cols-11 md:grid-cols-8  justify-center items-center ">
            <h3 className="text-xl font-bold center mb-0">
              <span className="text-orange-400 mr-2">POST</span>Criar Wallet
              para o estudante
            </h3>
            <p className="text-md my-2 text-gray-700">
              Rota que recebe o RA do aluno e executa a função "createStudent"
              do contrato "InteliFactory"
            </p>

            <div className="text-sm p-2 bg-gray-200 rounded-sm shadow-lg text-red-500">
              <span className="mx-auto">{`{{url}}`}/student/create</span>
            </div>

            <h4 className="text-xl font-bold mt-4">Headers</h4>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Campus;
