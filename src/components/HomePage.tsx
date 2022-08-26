import React from "react";

const HomePage = () => {
  const num: number = 5;

  return (
    <div>
      <h2 className="py-10 bg-slate-500 text-xl font-semibold">
        HomePage thu
        <span className="text-lime-300"> {num}</span>
      </h2>
      <div className="flex flex-row">
        <img src={require("../assets/images/sth.jpg")} alt="image" />
        <div className="bg-slate-800 text-yellow-200 flex flex-1 text-8xl items-center justify-center">
          Loli 2k9
        </div>
      </div>
    </div>
  );
};

export default HomePage;
