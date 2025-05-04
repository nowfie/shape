import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay
} from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const markedDates = [3, 22, 25]; // Example marked dates

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const renderHeader = () => (
    <div className="flex items-center justify-between px-2 mb-8">
     
      <h2 className="heading text-sm font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
      <div className="flex gap-3">
        <button
        onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        className=" p-2 flex items-center justify-center bg-gray-100 paragraph !text-xs rounded-full hover:bg-gray-200"
        >
            <FaChevronLeft/>
        </button>
        <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className=" p-2 flex items-center justify-center bg-gray-100 paragraph !text-xs rounded-full hover:bg-gray-200"
        >
            <FaChevronRight/>
        </button>
      </div>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEE";
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center text-gray-500 font-medium text-xs" key={i}>
          {format(addDays(startDate, i), dateFormat).charAt(0)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 mb-1">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const currentDay = day;
        const isCurrentMonth = isSameMonth(currentDay, monthStart);
        const isSelected = selectedDate && isSameDay(currentDay, selectedDate);
        const dayNum = parseInt(format(currentDay, "d"));

        let circleColor = "";
        if (isSelected) circleColor = "bg-yellow-400 text-white";
        else if (markedDates.includes(dayNum) && isCurrentMonth) circleColor = "bg-blue-200 text-black";

        days.push(
          <div key={currentDay} className="flex justify-center py-1">
            <div
              onClick={() => setSelectedDate(currentDay)}
              className={`w-8 h-8 flex items-center justify-center font-semibold text-xs rounded-full cursor-pointer
                ${!isCurrentMonth ? "text-gray-400" : "text"}
                ${circleColor}
              `}
            >
              {format(currentDay, "d")}
            </div>
          </div>
        );

        day = addDays(day, 1);
      }

      rows.push(<div className="grid grid-cols-7" key={day}>{days}</div>);
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="w-full  rounded-xl ">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
