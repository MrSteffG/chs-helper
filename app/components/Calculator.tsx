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

  const [participants, setParticipants] = useState(1);
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
    <div className="flex w-2/3 items-center justify-center rounded-2xl border bg-white p-10 max-lg:w-4/5 dark:bg-slate-600 dark:text-slate-200">
      <div className="flex w-4/5 flex-col gap-5">
        <h3 className="flex self-center text-xl font-semibold">
          Groups Calculator
        </h3>

        <div className="flex justify-between gap-5 max-lg:flex-col">
          <h3 className="font-semibold">Participants</h3>

          <input
            type="number"
            className="w-96 rounded-lg bg-stone-100 p-1 pl-2 text-black max-lg:w-full dark:bg-slate-300"
            defaultValue={1}
            onChange={onChangeParticipants}
          />
        </div>
        <div className="flex justify-between gap-5 max-lg:flex-col">
          <h3 className="font-semibold">Activity Type</h3>

          <select
            className="w-96 rounded-lg bg-stone-100 p-1 pl-2 text-black max-lg:w-full dark:bg-slate-300"
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
        <div className="flex justify-between gap-5 max-lg:flex-col">
          <h3 className="font-semibold">Activity Length (Hours)</h3>

          <select
            className="w-96 rounded-lg bg-stone-100 p-1 pl-2 text-black max-lg:w-full dark:bg-slate-300"
            onChange={onChangeLength}
          >
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="flex justify-between gap-5 max-lg:flex-col">
          <h3 className="font-semibold">Extra Staff Required</h3>

          <select
            className="w-96 rounded-lg bg-stone-100 p-1 pl-2 text-black max-lg:w-full dark:bg-slate-300"
            onChange={onChangeExtraStaff}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div id="gap div" className="opacity-0">
          Value
        </div>
        <div className="flex justify-center gap-5 rounded-xl max-lg:flex-col dark:bg-slate-700">
          <div className="flex flex-col items-center">
            <h3 className="flex rounded-tl-lg text-center font-semibold dark:bg-slate-800">
              Required Instructors
            </h3>
            <h3 className="p-3">{requiredInstructors}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="flex text-center font-semibold dark:bg-slate-800">
              Staff session hours
            </h3>
            <h3 className="p-3">{staffSessionHours}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="flex text-center font-semibold dark:bg-slate-800">
              Session Cost
            </h3>
            <h3 className="p-3">£ {sessionCost}</h3>
          </div>
          {/* extra staff hours */}
          <div className="flex flex-col items-center">
            <h3 className="flex text-center font-semibold dark:bg-slate-800">
              Total Cost
            </h3>
            <h3 className="p-3">£ {totalCost}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="flex text-center font-semibold dark:bg-slate-800">
              Total Cost with profit
            </h3>
            <h3 className="p-3">£ {totalCostProfit}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="flex rounded-tr-xl text-center font-semibold dark:bg-slate-800">
              Cost per participant
            </h3>
            <h3 className="p-3">£ {costPerParticipant}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
