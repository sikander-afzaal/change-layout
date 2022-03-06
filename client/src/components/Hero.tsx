import basicImage from "../assets/ape_1.png";

export const Hero = () => {
  return (
    <div className="mt-12 mx-auto max-w-7xl px-4 sm:mt-14 sm:px-6 md:mt-16 lg:mt-22 lg:px-8 xl:mt-28">
      <div className="flex flex-col items-center justify-between lg:flex-row lg:pb-20">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">
              Providing support for those experiencing
            </span>{" "}
            <span className="block text-indigo-600 xl:inline">
              homelessness
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Homeless Ape is a first-of-its-kind NFT project addressing real
            world problem.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            src={basicImage}
            alt=""
            className="object-cover w-full rounded"
          />
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="relative text-center mx-auto overflow-hidden shadow-2xl divide-y bg-white rounded sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <p className="font-bold tracking-wide text-gray-800  text-3xl">
              The utility token to support someone else
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
