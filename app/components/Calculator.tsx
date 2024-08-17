"use client";
import React, { useState } from "react";

const Calculator = () => {
  const standardPrices = {
    "TW-Bouldering-AW": 15,
    "Bouldering-AW": 14,
    AW: 13,
    NICAS: 15,
  };

  // Ratios
  const twBoulderingAw = 6;
  const boulderingAW = 9;
  const nicas = 4;

  const [participants, setParticipants] = useState(8);
  const [activityType, setActivityType] = useState("TW-Bouldering-AW");
  const [sessionLength, setSessionLength] = useState(1);
  const [extraStaffRequired, setExtraStaffRequired] = useState(1);
  const [ratio, setRatio] = useState(twBoulderingAw);

  const onChangeParticipants = (e: any) => {
    setParticipants(e.target.value);
  };

  const onChangeActivity = (e: any) => {
    setActivityType(e.target.value);
    setRatio(e.target.value);
  };

  const onChangeLength = (e: any) => {
    setSessionLength(e.target.value);
  };

  const onChangeExtraStaff = (e: any) => {
    setExtraStaffRequired(e.target.value);
  };

  //example data
  const staffWage = 10;
  const staffWageExtraCosts = staffWage * 0.3;
  const totalStaffWage = staffWage + staffWageExtraCosts;
  const averageShiftHours = 4;

  let requiredInstructors = Math.ceil(participants / ratio);

  let staffSessionHours = requiredInstructors * sessionLength;
  let sessionCost = staffSessionHours * totalStaffWage;

  let usedStaffHours = extraStaffRequired * sessionLength;
  let extraStaffHours = extraStaffRequired * averageShiftHours - usedStaffHours;
  let extraStaffHoursCost = extraStaffHours * totalStaffWage;
  let totalCost = sessionCost + extraStaffHoursCost;
  let totalCostProfit = totalCost * 1.5;
  let costPerParticipant =
    Math.round((totalCostProfit / participants) * 100) / 100;

  return (
    <div className="flex w-2/3 items-center justify-center rounded-2xl bg-slate-600 p-10 text-slate-200">
      <div className="flex w-4/5 flex-col gap-5">
        <div className="flex justify-between">
          <h3 className="font-semibold">Participants</h3>

          <input
            type="number"
            className="w-96 rounded-lg bg-slate-300 p-1 pl-2 text-black"
            placeholder={participants.toString()}
            onChange={onChangeParticipants}
          />
        </div>
        <div className="flex justify-between">
          <h3 className="font-semibold">Activity Type</h3>

          <select
            className="w-96 rounded-lg bg-slate-300 p-1 pl-2 text-black"
            onChange={onChangeActivity}
          >
            <option value={twBoulderingAw}>
              Tall Walls, Bouldering & Action Walls
            </option>
            <option value={boulderingAW}>Action Walls & Bouldering</option>
            <option value={boulderingAW}>Action Walls</option>
            <option value={boulderingAW}>Bouldering</option>

            <option value={nicas}>NICAS</option>
          </select>
        </div>
        <div className="flex justify-between">
          <h3 className="font-semibold">Activity Length (Hours)</h3>

          <select
            className="w-96 rounded-lg bg-slate-300 p-1 pl-2 text-black"
            onChange={onChangeLength}
          >
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="flex justify-between">
          <h3 className="font-semibold">Extra Staff Required</h3>

          <select
            className="w-96 rounded-lg bg-slate-300 p-1 pl-2 text-black"
            onChange={onChangeExtraStaff}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="flex justify-center rounded-xl bg-slate-700">
          <div className="flex flex-col items-center">
            <h3 className="flex rounded-tl-lg bg-slate-800 text-center font-semibold">
              Required Instructors
            </h3>
            <h3 className="p-3 font-semibold">{requiredInstructors}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="flex bg-slate-800 text-center font-semibold">
              Staff session hours
            </h3>
            <h3 className="p-3 font-semibold">{staffSessionHours}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="flex bg-slate-800 text-center font-semibold">
              Session Cost
            </h3>
            <h3 className="p-3 font-semibold">£ {sessionCost}</h3>
          </div>
          {/* extra staff hours */}
          <div className="flex flex-col items-center">
            <h3 className="flex bg-slate-800 text-center font-semibold">
              Total Cost
            </h3>
            <h3 className="p-3 font-semibold">£ {totalCost}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="flex bg-slate-800 text-center font-semibold">
              Total Cost with profit
            </h3>
            <h3 className="p-3 font-semibold">£ {totalCostProfit}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="flex rounded-tr-xl bg-slate-800 text-center font-semibold">
              Cost per participant
            </h3>
            <h3 className="p-3 font-semibold">£ {costPerParticipant}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
