import React from "react";

const HomeCardNull = () => {
  return (
    <div className="focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-xl shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80 min-w-[300px] max-w-[400px] sm:min-w-[400px] sm:max-w-[500px] md:min-w-[500px] md:max-w-[600px] lg:min-w-[500px] lg:max-w-[600px] bg-white rounded-lg p-4 py-5 px-4 cursor-pointer flex flex-col">
      <div className="animate-pulse h-8 w-full bg-gray-300 rounded-md mb-4"></div>
      <div className="animate-pulse h-48 w-full bg-gray-300 rounded-md mb-4 flex items-center justify-center">
        <p className="text-center">Please Wait</p>
      </div>
      <div className="animate-pulse h-6 w-full bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default HomeCardNull;
