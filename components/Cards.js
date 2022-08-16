import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

import { getLectures } from '../assets/functions';

const Button = ({ isLoading, children, className, ...props }) => {
  isLoading ? (className += 'cursor-loading') : null;
  return (
    <button className={className} {...props} disabled={isLoading}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export const Card = ({ name, request, createWallet }) => {
  const [result, setResult] = useState();
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const { method, header, url, description, body } = request;

  return (
    <div className="grid-cols-11 md:grid-cols-8 justify-center items-center mb-16 shadow-md p-4 rounded-lg">
      <div className="mt-2 mb-4">
        <h3 className="text-xl font-bold center mb-0">
          <span
            className={
              method == 'POST'
                ? 'text-orange-400 mr-2 w-1/4'
                : method == 'GET'
                ? 'text-green-500 mr-2 w-1/4'
                : method == 'PUT'
                ? 'text-blue-600 mr-2 w-1/4'
                : 'text-red-500 mr-2 w-1/4'
            }
          >
            {method}
          </span>
          {name}
        </h3>
        <p className="text-md my-2 text-gray-700">{description}</p>

        <div className="p-2 bg-gray-200 rounded-sm shadow-lg text-red-500">
          <span className="mx-auto"></span>
          <pre>
            <code>{url.raw}</code>
          </pre>
        </div>
      </div>

      {header.length > 0 ? (
        <div className="my-4">
          <h4 className="text-xl font-bold mt-4">Headers</h4>

          <hr className="mt-2 mb-4" />

          <div className="text-md my-4 flex text-gray-700 justify-between lg:w-2/3">
            {header.map(({ key, value }) => (
              <>
                <span className="font-bold mr-2">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
                <span>{value}</span>
              </>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}

      <div>
        {body ? (
          <>
            <h4 className="text-md mt-4">
              {body ? (
                <span className="font-bold text-xl">
                  BODY <span className="font-normal text-sm">{body.mode}</span>
                </span>
              ) : (
                'BODY'
              )}
            </h4>

            <hr className="mt-2 mb-4" />

            <table
              className={`${
                body.formdata ? 'table-auto' : 'hidden'
              } rounded-xl w-full border-orange-500`}
            >
              <thead>
                <tr>
                  <th className="text-start">Key</th>
                  <th className="text-start">Value</th>
                </tr>
              </thead>
              <tbody>
                {body.formdata ? (
                  body.formdata.map((item, index) => (
                    <tr className="justify-evenly" key={index}>
                      <td className="w-1/3">{item.key}</td>
                      <td className="w-2/3">{item.value || item.src}</td>
                    </tr>
                  ))
                ) : (
                  <></>
                )}
              </tbody>
            </table>

            <div
              className={`p-2 bg-gray-200 rounded-sm shadow-lg ${
                body.raw ? '' : 'hidden'
              }`}
            >
              {body.raw}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      <div>
        <h4 className="text-xl font-bold mt-4">Testar API</h4>

        <hr className="mt-2 mb-4" />

        <div className="mt-2">
          {body && body.raw ? (
            <input
              type="text"
              className={
                method == 'POST'
                  ? 'rounded-l-lg border p-2 w-3/4'
                  : method == 'GET'
                  ? 'hidden'
                  : method == 'PUT'
                  ? 'rounded-l-lg border p-2 w-3/4'
                  : 'rounded-l-lg border p-2 w-3/4'
              }
              placeholder={`Valor no formato do body/o que vier após o ":"...`}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          ) : url.raw.includes('/:') ? (
            <input
              type="text"
              className="rounded-l-lg border p-2 w-3/4"
              placeholder={`Valor no formato do body ou o que vier após o ":"..`}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          ) : (
            <></>
          )}

          <Button
            className={
              method == 'POST'
                ? 'bg-orange-400 w-1/4 p-2 h-full text-white rounded-r-lg'
                : method == 'POST' && body.formdata
                ? 'bg-orange-400 w-full p-4 h-full text-white rounded-r-lg'
                : method == 'GET' && url.raw.includes('/:')
                ? 'bg-green-500 w-1/4 p-2 h-full text-white rounded-r-lg'
                : method == 'GET'
                ? 'bg-green-500 p-2 h-full text-white rounded-lg w-full'
                : method == 'PUT'
                ? 'bg-blue-600 w-1/4 p-2 h-full text-white rounded-r-lg'
                : 'bg-red-500 w-1/4 p-2 h-full text-white rounded-r-lg'
            }
            onClick={async () => {
              setIsButtonLoading(true);
              setTimeout(() => {
                setIsButtonLoading(false);
              }, 2500);
              setResult(
                getLectures(body.raw, '2-H7-A!u.nSz-)<Z/NQPV:gV$}Ny]f', result)
              );
            }}
            isLoading={isButtonLoading}
          >
            Executar
          </Button>

          {result ? (
            <div className="mt-4">
              <h4 className="text-xl font-bold mt-4">Resultado</h4>

              <hr className="mt-2 mb-4" />

              <div className="text-md my-4 flex text-gray-700 justify-between lg:w-2/3">
                {JSON.stringify(result)}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
