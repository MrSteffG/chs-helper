import React from "react";

const DuesCalculator = () => {
  return (
    <div className="flex w-2/3 flex-col items-center justify-center gap-5 rounded-2xl bg-slate-600 p-10 text-white">
      <h3 className="flex">Todays Date is {Date()}</h3>
      <div className="flex w-2/3 items-center justify-around rounded-2xl">
        <div className="flex flex-col items-center justify-center">
          Bouldering
          <div className="flex gap-5">
            <div className="flex">Adult</div>
            <div className="flex">Under 18 / Concession</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          Sport
          <div className="flex gap-5">
            <div className="flex">Adult</div>
            <div className="flex">Under 18 / Concession</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          Add-on
          <div className="flex gap-5">
            <div className="flex">Under 18 / NICAS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuesCalculator;
