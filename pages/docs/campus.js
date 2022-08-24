import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '../../components/Cards';
import content from '../../assets/content.json';

import rightArrow from '../../assets/icons/arrow-right.svg';

const Student = () => {
  const { info, item } = content;

  const studentDocs = item[1].item;

  return (
    <main className="container flex-1 px-2 py-4 justify-center items-center min-w-full w-full h-screen select-none">
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
                Inteli Blockchain
              </h1>
            </div>
          </div>
        </Link>

        <div className="grid-cols-11 md:grid-cols-8  w-full">
          <div className="mx-auto">
            <h1 className="text-3xl font-bold">Acesso ao Campus</h1>
          </div>

          <hr className="my-4" />

          {studentDocs.map((item, index) => (
            <Card {...item} key={index + 'docs/campus'} />
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default Student;
