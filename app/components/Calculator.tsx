import React from "react";

const Calculator = () => {
  const standardPrices = {
    "TW-Bouldering-AW": 15,
    "Bouldering-AW": 14,
    AW: 13,
    NICAS: 15,
  };

  const ratios = {
    TW: 6,
    Bouldering: 9,
    AW: 9,
    NICAS: 4,
  };

  let participants = 0;

  //example data
  const staffWage = 10;
  const staffWageExtraCosts = staffWage * 0.3;
  const totalStaffWage = staffWage + staffWageExtraCosts;
  const averageShiftHours = 4;

  return (
    <div className="flex w-2/3 items-center justify-center rounded-lg bg-slate-400 p-10">
      <form className="flex w-2/3 flex-col gap-5" action="">
        <div className="flex justify-between">
          Participants
          <input
            type="number"
            className="w-80 rounded-lg bg-slate-100 p-1"
            placeholder="1"
          />
        </div>
        <div className="flex justify-between">
          Select activity type
          <select className="w-80 rounded-lg bg-slate-100 p-1">
            <option value="TW-Bouldering-Aw">
              Tall Walls, Bouldering & Action Walls
            </option>
            <option value="Bouldering-Aw">Bouldering & Action Walls</option>
            <option value="Bouldering">Bouldering</option>
            <option value="NICAS">NICAS</option>
          </select>
        </div>
        <div className="flex justify-between">
          Activity length (Hours)
          <select className="w-80 rounded-lg bg-slate-100 p-1">
            <option value="TW-Bouldering-Aw">
              Tall Walls, Bouldering & Action Walls
            </option>
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
