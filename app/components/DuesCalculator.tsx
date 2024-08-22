"use client";

import React, { useState } from "react";
import { FaClipboard } from "react-icons/fa";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";

import Test from "../FAQ/Test.mdx";

const DuesCalculator = () => {
  //Prices
  const adultBouldering = 44;
  const concessionBouldering = 33;
  const adultSport = 52;
  const concessionSport = 40;
  const addon = 16;

  // Date variables
  //TODO: Modifiable date

  const [todaysDate, setTodaysDate] = useState<Date | undefined>(new Date());
  // let todaysDate = new Date();
  const todaysDay = todaysDate?.getDate();
  const thisMonth = todaysDate?.getMonth();
  const nextMonth = thisMonth! + 1;

  const daysInMonth = (month: number) => {
    switch (month) {
      case 0:
        return 31;
      case 1:
        return 28;
      case 2:
        return 31;
      case 3:
        return 30;
      case 4:
        return 31;
      case 5:
        return 30;
      case 6:
        return 31;
      case 7:
        return 31;
      case 8:
        return 30;
      case 9:
        return 31;
      case 10:
        return 30;
      case 11:
        return 31;
    }
  };

  const thisMonthDays = daysInMonth(thisMonth!);
  const nextMonthDays: any = daysInMonth(nextMonth);

  const daysToEndOfNextMonth = nextMonthDays - todaysDay! + 1; //Add extra day to account for current day

  const duesMultiplier = (membershipType: number) => {
    return (
      Math.round(
        (membershipType / nextMonthDays) * daysToEndOfNextMonth * 100,
      ) / 100
    );
  };

  //Used for testing steps that determine the amounts due
  const dateLogicTests = () => {
    return (
      <div className="flex flex-col">
        <h3>Date logic tests</h3>
        <p>thisMonth = {thisMonth}</p>
        <p>thisMonthDays = {thisMonthDays}</p>
        <p>nextMonth = {nextMonth}</p>
        <p>nextMonthDays = {nextMonthDays}</p>
        <p>todaysDay = {todaysDay}</p>
        <p>daysToEndOfNextMonth = {daysToEndOfNextMonth}</p>
      </div>
    );
  };

  const adultBoulderingRes = duesMultiplier(adultBouldering);
  const concBoulderingRes = duesMultiplier(concessionBouldering);
  const adultSportRes = duesMultiplier(adultSport);
  const concSportRes = duesMultiplier(concessionSport);
  const addonRes = duesMultiplier(addon);

  const copyFuncAB = (data: any) =>
    navigator.clipboard.writeText(data.toString());

  const DatePicker = () => {
    return (
      <Calendar
        mode="single"
        selected={todaysDate}
        onSelect={setTodaysDate}
        className="rounded-md border"
      />
    );
  };

  return (
    <div className="flex w-2/3 flex-col items-center justify-center gap-5 rounded-xl border bg-white p-10 dark:bg-slate-600 dark:text-white max-lg:w-5/6">
      <h3 className="flex text-xl font-semibold">Membership Dues</h3>
      <h3 className="flex items-center gap-5 text-center font-light">
        Todays Date is {todaysDate?.toString().substring(0, 16)}
        <Popover>
          <PopoverTrigger className="rounded-md bg-stone-100 p-1 dark:bg-slate-800">
            Change Date
          </PopoverTrigger>
          <PopoverContent className="w-full">
            <DatePicker />
          </PopoverContent>
        </Popover>
      </h3>

      <div className="flex w-4/5 items-center justify-around gap-5 rounded-2xl p-3 dark:bg-slate-800 max-lg:flex-col">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="font-semibold">Bouldering</h2>
          <div className="flex items-center justify-center gap-5 text-center">
            <div className="flex flex-col gap-1">
              <h3>Adult</h3>
              <p
                onClick={() => copyFuncAB(adultBoulderingRes)}
                className="flex cursor-pointer items-center justify-center rounded-md bg-stone-100 p-2 hover:bg-stone-200 dark:bg-slate-600 dark:hover:bg-slate-700"
              >
                £ {duesMultiplier(adultBouldering)}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3>Concession</h3>
              <p
                onClick={() => copyFuncAB(concBoulderingRes)}
                className="flex cursor-pointer items-center justify-center rounded-md bg-stone-100 p-2 hover:bg-stone-200 dark:bg-slate-600 dark:hover:bg-slate-700"
              >
                £ {duesMultiplier(concessionBouldering)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="font-semibold">Tall Walls</h3>
          <div className="flex items-center justify-center gap-5 text-center">
            <div className="flex flex-col gap-1">
              <h3>Adult</h3>
              <p
                onClick={() => copyFuncAB(adultSportRes)}
                className="flex cursor-pointer items-center justify-center rounded-md bg-stone-100 p-2 hover:bg-stone-200 dark:bg-slate-600 dark:hover:bg-slate-700"
              >
                £ {duesMultiplier(adultSport)}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3>Concession</h3>
              <p
                onClick={() => copyFuncAB(concSportRes)}
                className="flex cursor-pointer items-center justify-center rounded-md bg-stone-100 p-2 hover:bg-stone-200 dark:bg-slate-600 dark:hover:bg-slate-700"
              >
                £ {duesMultiplier(concessionSport)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="font-semibold">Add-on</h3>
          <div className="flex items-center justify-center gap-5 text-center">
            <div className="flex flex-col gap-1">
              <h3>Under 18 / NICAS</h3>
              <p
                onClick={() => copyFuncAB(addonRes)}
                className="flex cursor-pointer items-center justify-center rounded-md bg-stone-100 p-2 hover:bg-stone-200 dark:bg-slate-600 dark:hover:bg-slate-700"
              >
                £ {duesMultiplier(addon)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="prose">
        <Test />
      </div>
    </div>
  );
};

export default DuesCalculator;
