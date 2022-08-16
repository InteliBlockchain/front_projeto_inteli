export const Card = ({
  method,
  routeFunction,
  desc,
  url,
  headers,
  body
}) => {
  return (
    <div className="grid-cols-11 md:grid-cols-8 justify-center items-center">
      <div className="mt-2 mb-4">
        <h3 className="text-xl font-bold center mb-0">
          <span
            className={
              method == 'POST'
                ? 'text-orange-400 mr-2 w-1/4'
                : method == 'GET'
                ? 'text-green-700 mr-2 w-1/4'
                : method == 'PUT'
                ? 'text-blue-600 mr-2 w-1/4'
                : 'text-red-400 mr-2 w-1/4'
            }
          >
            {method}
          </span>
          {routeFunction}
        </h3>
        <p className="text-md my-2 text-gray-700">{desc}</p>

        <div className="text-sm p-2 bg-gray-200 rounded-sm shadow-lg text-red-500">
          <span className="mx-auto"></span>
          <pre>
            <code>{url}</code>
          </pre>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-xl font-bold mt-4">Headers</h4>

        <hr className="mt-2 mb-4" />

        <div className="text-md my-2 flex text-gray-700 justify-between">
          {headers.map(({ name, value }) => (
            <>
              <span className="font-bold mr-2">{name}</span>
              <span>{value}</span>
            </>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-md mt-4">
          {typeof body === 'object' ? (
            <span className="font-bold text-xl">
              BODY <span className="font-normal text-sm">raw</span>
            </span>
          ) : (
            'BODY'
          )}
        </h4>

        <hr className="mt-2 mb-4" />

        <div className="text-sm p-2 bg-gray-200 rounded-sm shadow-lg">
          <pre>
            <code lang="javascript">{JSON.stringify(body)}</code>
          </pre>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold mt-4">Testar API</h4>

        <hr className="mt-2 mb-4" />

        <div className="mt-2">
          <input
            type="text"
            className="rounded-l-lg border p-2 w-3/4"
            placeholder="RA ( default: { ra: '2022.2A.02' } )"
          />
          <button
            className={
              method == 'POST'
                ? 'bg-orange-400 p-2 h-full text-white rounded-r-lg w-1/4'
                : method == 'GET'
                ? 'bg-green-700 p-2 h-full text-white rounded-r-lg w-1/4'
                : method == 'PUT'
                ? 'bg-blue-600 p-2 h-full text-white rounded-r-lg w-1/4'
                : 'bg-red-400 p-2 h-full text-white rounded-r-lg w-1/4'
            }
            onClick={() => {}}
          >
            Criar Wallet
          </button>
        </div>
      </div>
    </div>
  );
};
