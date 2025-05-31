import { useState, useEffect } from "react";
import CalendarNavigation from "@/polymet/components/calendar-navigation";
import MonthView from "@/polymet/components/month-view";
import WeekView from "@/polymet/components/week-view";
import DayView from "@/polymet/components/day-view";
import ListView from "@/polymet/components/list-view";
import FeedbackForm from "@/polymet/components/feedback-form";
import { EVENTS_DATA } from "@/polymet/data/events-data";

export default function EventsCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<"month" | "week" | "day" | "list">("month");

  const handlePrevious = () => {
    const newDate = new Date(currentDate);
    if (view === "month") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else if (view === "week") {
      newDate.setDate(newDate.getDate() - 7);
    } else if (view === "day") {
      newDate.setDate(newDate.getDate() - 1);
    } else if (view === "list") {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (view === "month") {
      newDate.setMonth(newDate.getMonth() + 1);
    } else if (view === "week") {
      newDate.setDate(newDate.getDate() + 7);
    } else if (view === "day") {
      newDate.setDate(newDate.getDate() + 1);
    } else if (view === "list") {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Events Calendar</h1>

      <CalendarNavigation
        currentDate={currentDate}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onToday={handleToday}
        view={view}
        onViewChange={setView}
      />

      <div className="mb-8">
        {view === "month" && (
          <MonthView currentDate={currentDate} events={EVENTS_DATA} />
        )}
        {view === "week" && (
          <WeekView currentDate={currentDate} events={EVENTS_DATA} />
        )}
        {view === "day" && (
          <DayView currentDate={currentDate} events={EVENTS_DATA} />
        )}
        {view === "list" && (
          <ListView currentDate={currentDate} events={EVENTS_DATA} />
        )}
      </div>

      <div className="flex justify-center mt-12">
        <FeedbackForm />
      </div>
    </div>
  );
}
