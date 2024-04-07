import React from "react";

const CardFeature = ({ title, image, description }) => {
  

  return (
    <div className="focus:ring-4 focus:outline-none focus:ring-slate-300 dark:focus:ring-slate-800 shadow-xl shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80 min-w-[300px] max-w-[400px] sm:min-w-[500px] sm:max-w-[600px] md:min-w-[600px] md:max-w-[700px] lg:min-w-[600px] lg:max-w-[700px] rounded-lg p-4 py-5 px-4 cursor-pointer flex flex-col bg-slate-400">
      <h3 className="font-bold text-black capitalize text-lg mt-4 text-left w-full mb-6 sm:mb-7 md:mb-8 lg:mb-8">
        {title}
      </h3>

      <div className="h-32 sm:h-44 md:h-52 lg:h-64 flex items-center justify-center mb-4">
        <img
          src={image}
          className="h-full border-4 border-black rounded-lg"
          alt={title}
        />
      </div>
      <div className="description-container overflow-auto max-h-40 sm:max-h-52 md:max-h-64 lg:max-h-80 text-center">
        <p className="font-bold italic text-black">{description}</p>
      </div>
    </div>
  );
};

export default CardFeature;
