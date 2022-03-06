export const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="text-3xl inline-block px-3 py-px mb-4 font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          The Team
        </p>
      </div>
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg">
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              alt="team-1"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Niros</p>
            <p className="mb-5 text-xs text-gray-800">Creative Mind</p>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              alt="team-2"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Marta Clermont</p>
            <p className="mb-5 text-xs text-gray-800">Design Team Lead</p>
          </div>
        </div>
        <div>
          <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
            <img
              className="absolute object-cover w-full h-full rounded"
              alt="team-3"
            />
          </div>
          <div className="flex flex-col sm:text-center">
            <p className="text-lg font-bold">Alice Melbourne</p>
            <p className="mb-5 text-xs text-gray-800">Human Resources</p>
          </div>
        </div>
      </div>
    </div>
  );
};
