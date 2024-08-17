"use client";
import React, { useState } from "react";

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

  const [participants, setParticipants] = useState(8);
  const [activityType, setActivityType] = useState("TW-Bouldering-AW");
  const [sessionLength, setSessionLength] = useState(1);
  const [extraStaffRequired, setExtraStaffRequired] = useState(1);

  const onChangeParticipants = (e: any) => {
    setParticipants(e.target.value);
  };

  const onChangeActivity = (e: any) => {
    setActivityType(e.target.value);
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

  let requiredInstructors = Math.ceil(participants / ratios.TW);
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
    <div className="flex w-2/3 items-center justify-center rounded-lg bg-slate-400 p-10">
      <div className="flex w-4/5 flex-col gap-5">
        <div className="flex justify-between">
          Participants
          <input
            type="number"
            className="w-80 rounded-lg bg-slate-100 p-1 pl-2"
            placeholder={participants.toString()}
            onChange={onChangeParticipants}
          />
        </div>
        <div className="flex justify-between">
          Select activity type
          <select
            className="w-80 rounded-lg bg-slate-100 p-1"
            onChange={onChangeActivity}
          >
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
          <select
            className="w-80 rounded-lg bg-slate-100 p-1"
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
          Extra Staff Required
          <select
            className="w-80 rounded-lg bg-slate-100 p-1"
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
        <div className="flex justify-center">Results</div>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col items-center">
            <h3>Required Instructors</h3>
            <h3>{requiredInstructors}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3>Staff session hours</h3>
            <h3>{staffSessionHours}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3>Session Cost</h3>
            <h3>£ {sessionCost}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3>Extra staff hours</h3>
            <h3>{extraStaffHours}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3>Total Cost</h3>
            <h3>£ {totalCost}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3>Total Cost with profit</h3>
            <h3>£ {totalCostProfit}</h3>
          </div>
          <div className="flex flex-col items-center">
            <h3>Cost per participant</h3>
            <h3>£ {costPerParticipant}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
