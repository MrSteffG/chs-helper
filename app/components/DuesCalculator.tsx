import React from "react";

const DuesCalculator = () => {
  //Prices
  const adultBouldering = 44;
  const concessionBouldering = 33;
  const adultSport = 52;
  const concessionSport = 40;
  const addon = 16;

  const todaysDate = new Date();
  const todaysDay = todaysDate.getDate();

  const thisMonth = todaysDate.getMonth();
  const nextMonth = thisMonth + 1;

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

  const thisMonthDays = daysInMonth(thisMonth);
  const nextMonthDays: any = daysInMonth(nextMonth);
  //Add extra day to account for today
  const daysToEndOfNextMonth = nextMonthDays - todaysDay + 1;

  const duesMultiplier = (membershipType: number) => {
    return (
      Math.round(
        (membershipType / nextMonthDays) * daysToEndOfNextMonth * 100,
      ) / 100
    );
  };

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

  return (
    <div className="flex w-2/3 flex-col items-center justify-center gap-5 rounded-2xl bg-slate-600 p-10 text-white">
      <h3 className="flex gap-5">Todays Date is {todaysDate.toString()}</h3>
      <div className="flex w-4/5 items-center justify-around rounded-2xl bg-slate-800 p-3">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-semibold">Bouldering</h2>
          <div className="flex items-center justify-center gap-5 text-center">
            <div className="flex flex-col gap-1">
              <h3>Adult</h3>
              <p>£ {duesMultiplier(adultBouldering)}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3>Concession</h3>
              <p>£ {duesMultiplier(concessionBouldering)}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-semibold">Tall Walls</h3>
          <div className="flex items-center justify-center gap-5 text-center">
            <div className="flex flex-col gap-1">
              <h3>Adult</h3>
              <p>£ {duesMultiplier(adultSport)}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3>Concession</h3>
              <p>£ {duesMultiplier(concessionSport)}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-semibold">Add-on</h3>
          <div className="flex items-center justify-center gap-5 text-center">
            <div className="flex flex-col gap-1">
              <h3>Under 18 / NICAS</h3>
              <p>£ {duesMultiplier(addon)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuesCalculator;
