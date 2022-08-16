import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

export const Card = ({ name, request }) => {
  const { method, header, url, description, body } = request;

  const [inputValue, setInputValue] = useState('');

  const useReq = (input) => {
    url = url.raw.replace('{{url}}', '').split('/').splice(1).join('/');
    let fetcher;

    switch (method) {
      case 'GET':
        fetcher = (url, token) =>
          axios
            .get(url, { headers: { Authorization: token } })
            .then((res) => res.data);
        break;
      case 'POST':
        fetcher = (url, token, body) =>
          axios
            .post(url, body, { headers: { Authorization: token } })
            .then((res) => res.data);
        break;
      case 'PUT':
        fetcher = (url, token, body) =>
          axios
            .put(url, body, { headers: { Authorization: token } })
            .then((res) => res.data);
        break;
      case 'DELETE':
        fetcher = (url, token) =>
          axios
            .delete(url, { headers: { Authorization: token } })
            .then((res) => res.data);
        break;
      default:
        break;
    }

    const { data, error } = useSWR('http://localhost:3001/' + url, fetcher, {
      initialData: {},
      onError: (err) => {
        console.log(err);
      },
    });
  };

  console.log(
    'http://localhost:3001/' +
      url.raw.replace('{{url}}', '').split('/').splice(1).join('/')
  );

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
        {body && body.raw ? (
          <>
            <h4 className="text-md mt-4">
              {typeof body === 'object' ? (
                <span className="font-bold text-xl">
                  BODY{' '}
                  <span className="font-normal text-sm">
                    {body.mode ? body.mode : ''}
                  </span>
                </span>
              ) : (
                'BODY'
              )}
            </h4>
            <hr className="mt-2 mb-4" />
            <div className="p-2 bg-gray-200 rounded-sm shadow-lg">
              <pre>
                <code lang="javascript">{body.raw}</code>
              </pre>
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
              placeholder={`Valor no formato do body...`}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          ) : (
            <></>
          )}
          <button
            className={
              method == 'POST'
                ? 'bg-orange-400 w-1/4 p-2 h-full text-white rounded-r-lg'
                : method == 'GET'
                ? 'bg-green-500 p-2 h-full text-white rounded-lg w-full'
                : method == 'PUT'
                ? 'bg-blue-600 w-1/4 p-2 h-full text-white rounded-r-lg'
                : 'bg-red-500 w-1/4 p-2 h-full text-white rounded-r-lg'
            }
            onClick={() => {
              useReq(inputValue);
            }}
          >
            Executar
          </button>
        </div>
      </div>
    </div>
  );
};
