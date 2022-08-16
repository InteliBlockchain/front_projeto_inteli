import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';

import rightArrow from '../assets/icons/arrow-right.svg';

const Docs = () => {
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
                <span className="mx-auto"></span>
                <pre>
                  <code>{`{{url}}`}/student/create</code>
                </pre>
              </div>

              <h4 className="text-xl font-bold mt-4">Headers</h4>
              <hr className="my-2" />
              <div className="text-md my-2 flex text-gray-700 justify-between">
                <span className="font-bold mr-2">Authorization</span>
                <span>{`Bearer 2-H7-A!u.nSz-)<Z/NQPV:gV$}Ny]f`}</span>
              </div>

              <h4 className="text-md mt-4">
                <span className="font-bold text-xl">BODY</span> raw
              </h4>
              <hr className="my-2" />
              <div className="text-sm p-2 bg-gray-200 rounded-sm shadow-lg">
                <pre>
                  <code>
                    {`{
    "ra": "2022.2A.02"
}`}
                  </code>
                </pre>
              </div>
              <pre className="language-javascript">
  <code className="language-javascript">
    <span className="token keyword">var</span> axios{" "}
    <span className="token operator">=</span>{" "}
    <span className="token function">require</span>
    <span className="token punctuation">(</span>
    <span className="token string">'axios'</span>
    <span className="token punctuation">)</span>
    <span className="token punctuation">;</span>
    {"\n"}
    <span className="token keyword">var</span> data{" "}
    <span className="token operator">=</span>{" "}
    <span className="token string">
      '{"{"}\r\n{"    "}"ra": "2022.2A.02"\r\n{"}"}'
    </span>
    <span className="token punctuation">;</span>
    {"\n"}
    {"\n"}
    <span className="token keyword">var</span> config{" "}
    <span className="token operator">=</span>{" "}
    <span className="token punctuation">{"{"}</span>
    {"\n"}
    {"  "}
    <span className="token literal-property property">method</span>
    <span className="token operator">:</span>{" "}
    <span className="token string">'post'</span>
    <span className="token punctuation">,</span>
    {"\n"}
    {"  "}
    <span className="token literal-property property">url</span>
    <span className="token operator">:</span>{" "}
    <span className="token string">
      '{"{"}
      {"{"}url{"}"}
      {"}"}/student/create'
    </span>
    <span className="token punctuation">,</span>
    {"\n"}
    {"  "}
    <span className="token literal-property property">headers</span>
    <span className="token operator">:</span>{" "}
    <span className="token punctuation">{"{"}</span> {"\n"}
    {"    "}
    <span className="token string-property property">'authorization'</span>
    <span className="token operator">:</span>{" "}
    <span className="token string">
      'Bearer 2-H7-A!u.nSz-)&lt;Z/NQPV:gV${"}"}Ny]f'
    </span>
    {"\n"}
    {"  "}
    <span className="token punctuation">{"}"}</span>
    <span className="token punctuation">,</span>
    {"\n"}
    {"  "}
    <span className="token literal-property property">data</span>{" "}
    <span className="token operator">:</span> data{"\n"}
    <span className="token punctuation">{"}"}</span>
    <span className="token punctuation">;</span>
    {"\n"}
    {"\n"}
    <span className="token function">axios</span>
    <span className="token punctuation">(</span>config
    <span className="token punctuation">)</span>
    {"\n"}
    <span className="token punctuation">.</span>
    <span className="token function">then</span>
    <span className="token punctuation">(</span>
    <span className="token keyword">function</span>{" "}
    <span className="token punctuation">(</span>
    <span className="token parameter">response</span>
    <span className="token punctuation">)</span>{" "}
    <span className="token punctuation">{"{"}</span>
    {"\n"}
    {"  "}console<span className="token punctuation">.</span>
    <span className="token function">log</span>
    <span className="token punctuation">(</span>
    <span className="token constant">JSON</span>
    <span className="token punctuation">.</span>
    <span className="token function">stringify</span>
    <span className="token punctuation">(</span>response
    <span className="token punctuation">.</span>data
    <span className="token punctuation">)</span>
    <span className="token punctuation">)</span>
    <span className="token punctuation">;</span>
    {"\n"}
    <span className="token punctuation">{"}"}</span>
    <span className="token punctuation">)</span>
    {"\n"}
    <span className="token punctuation">.</span>
    <span className="token function">catch</span>
    <span className="token punctuation">(</span>
    <span className="token keyword">function</span>{" "}
    <span className="token punctuation">(</span>
    <span className="token parameter">error</span>
    <span className="token punctuation">)</span>{" "}
    <span className="token punctuation">{"{"}</span>
    {"\n"}
    {"  "}console<span className="token punctuation">.</span>
    <span className="token function">log</span>
    <span className="token punctuation">(</span>error
    <span className="token punctuation">)</span>
    <span className="token punctuation">;</span>
    {"\n"}
    <span className="token punctuation">{"}"}</span>
    <span className="token punctuation">)</span>
    <span className="token punctuation">;</span>
    {"\n"}
  </code>
</pre>

            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Docs;
