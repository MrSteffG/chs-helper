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

  // Input Variables
  const [participants, setParticipants] = useState(1);
  const [activityType, setActivityType] = useState("TW-Bouldering-AW");
  const [sessionLength, setSessionLength] = useState(1);
  const [extraStaffRequired, setExtraStaffRequired] = useState(1);
  const [ratio, setRatio] = useState(twBoulderingAw);
  const [staffWage, setStaffWage] = useState(10);

  // Input onChange functions
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

  const onChangeWage = (e: any) => {
    setStaffWage(Math.round(e.target.value * 100) / 100);
  };

  //example data

  const staffWageExtraCosts = staffWage * 0.3;
  const totalStaffWage = staffWage + staffWageExtraCosts;
  const averageShiftHours = 4;

  //Calculator vaiables
  let requiredInstructors = Math.ceil(participants / ratio);
  let staffSessionHours = requiredInstructors * sessionLength;
  let sessionCost = Math.round(staffSessionHours * totalStaffWage * 100) / 100;
  let usedStaffHours = extraStaffRequired * sessionLength;
  let extraStaffHours = extraStaffRequired * averageShiftHours - usedStaffHours;
  let extraStaffHoursCost = extraStaffHours * totalStaffWage;
  let totalCost = Math.round((sessionCost + extraStaffHoursCost) * 100) / 100;
  let totalCostProfit = Math.round(totalCost * 1.5 * 100) / 100;
  let costPerParticipant =
    Math.round((totalCostProfit / participants) * 100) / 100;

  return (
    <div className="flex w-2/3 items-center justify-center rounded-2xl border bg-white p-10 dark:bg-slate-600 dark:text-slate-200 max-lg:w-5/6">
      <div className="flex w-4/5 flex-col gap-5">
        <h3 className="flex self-center text-xl font-semibold">
          Groups Calculator
        </h3>

        <div className="flex justify-between gap-5 max-lg:flex-col">
          <h3 className="font-semibold">Participants</h3>

          <input
            type="number"
            className="w-96 rounded-lg bg-stone-100 p-1 pl-2 text-black dark:bg-slate-300 max-lg:w-full"
            defaultValue={1}
            onChange={onChangeParticipants}
          />
        </div>
        <div className="flex justify-between gap-5 max-lg:flex-col">
          <h3 className="font-semibold">Activity Type</h3>

          <select
            className="w-96 rounded-lg bg-stone-100 p-1 pl-2 text-black dark:bg-slate-300 max-lg:w-full"
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
            className="w-96 rounded-lg bg-stone-100 p-1 pl-2 text-black dark:bg-slate-300 max-lg:w-full"
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
            className="w-96 rounded-lg bg-stone-100 p-1 pl-2 text-black dark:bg-slate-300 max-lg:w-full"
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
        <div className="flex justify-between gap-5 max-lg:flex-col">
          <h3 className="font-semibold">Average Staff Wage</h3>

          <input
            type="number"
            step="0.01"
            className="w-96 rounded-lg bg-stone-100 p-1 pl-2 text-black dark:bg-slate-300 max-lg:w-full"
            defaultValue={10}
            onChange={onChangeWage}
          />
        </div>
        <div id="gap div" className="opacity-0">
          Value
        </div>
        <div className="flex justify-center rounded-xl bg-stone-100 dark:bg-slate-700 max-lg:flex-col max-lg:gap-5">
          <div className="flex flex-col items-center">
            <h3 className="flex justify-center rounded-tl-lg bg-stone-200 text-center font-semibold dark:bg-slate-800 max-lg:w-full max-lg:rounded-t-lg">
              Required Instructors
            </h3>
            <h3 className="p-3">{requiredInstructors}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="flex justify-center bg-stone-200 text-center font-semibold dark:bg-slate-800 max-lg:w-full">
              Staff Hours
            </h3>
            <h3 className="p-3">{staffSessionHours}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="flex justify-center bg-stone-200 text-center font-semibold dark:bg-slate-800 max-lg:w-full">
              Session Cost
            </h3>
            <h3 className="p-3">£{sessionCost}</h3>
          </div>
          {/* extra staff hours */}
          <div className="flex flex-col items-center">
            <h3 className="flex justify-center bg-stone-200 text-center font-semibold dark:bg-slate-800 max-lg:w-full">
              Total Cost
            </h3>
            <h3 className="p-3">£{totalCost}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="flex justify-center bg-stone-200 text-center font-semibold dark:bg-slate-800 max-lg:w-full">
              Total Cost with profit
            </h3>
            <h3 className="p-3">£{totalCostProfit}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="flex justify-center rounded-tr-xl bg-stone-200 text-center font-semibold dark:bg-slate-800 max-lg:w-full max-lg:rounded-none">
              Cost per participant
            </h3>
            <h3 className="p-3">£{costPerParticipant}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
