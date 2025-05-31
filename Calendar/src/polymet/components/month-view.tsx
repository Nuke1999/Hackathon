import { useMemo } from "react";
import EventItem from "@/polymet/components/event-item";
import { Event } from "@/polymet/data/events-data";

interface MonthViewProps {
  currentDate: Date;
  events: Event[];
}

export default function MonthView({ currentDate, events }: MonthViewProps) {
  // Get all days in the current month view (including days from prev/next months that appear in the grid)
  const daysInMonthView = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);

    // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay();

    // Calculate days from previous month to show
    const daysFromPrevMonth = firstDayOfWeek;

    // Calculate total days in the current month
    const daysInMonth = lastDay.getDate();

    // Calculate days from next month to show to complete the grid
    const totalDaysInGrid =
      Math.ceil((daysFromPrevMonth + daysInMonth) / 7) * 7;
    const daysFromNextMonth = totalDaysInGrid - daysFromPrevMonth - daysInMonth;

    const days = [];

    // Add days from previous month
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = new Date(prevMonthYear, prevMonth + 1, 0).getDate();

    for (
      let i = daysInPrevMonth - daysFromPrevMonth + 1;
      i <= daysInPrevMonth;
      i++
    ) {
      days.push({
        date: new Date(prevMonthYear, prevMonth, i),
        isCurrentMonth: false,
      });
    }

    // Add days from current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }

    // Add days from next month
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextMonthYear = month === 11 ? year + 1 : year;

    for (let i = 1; i <= daysFromNextMonth; i++) {
      days.push({
        date: new Date(nextMonthYear, nextMonth, i),
        isCurrentMonth: false,
      });
    }

    return days;
  }, [currentDate]);

  // Group events by date
  const eventsByDate = useMemo(() => {
    const grouped: Record<string, Event[]> = {};

    events.forEach((event) => {
      const dateKey = event.date;
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(event);
    });

    return grouped;
  }, [events]);

  // Get events for a specific day
  const getEventsForDay = (date: Date) => {
    const dateKey = date.toISOString().split("T")[0];
    return eventsByDate[dateKey] || [];
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Day headers */}
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="bg-gray-100 py-2 text-center text-sm font-medium"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {daysInMonthView.map((day, index) => {
          const isToday = day.date.getTime() === today.getTime();
          const dayEvents = getEventsForDay(day.date);

          return (
            <div
              key={index}
              className={`min-h-[100px] bg-white p-1 ${day.isCurrentMonth ? "" : "bg-gray-50 text-gray-400"}`}
            >
              <div
                className={`text-right p-1 ${isToday ? "bg-blue-100 rounded-full w-7 h-7 flex items-center justify-center ml-auto" : ""}`}
              >
                {day.date.getDate()}
              </div>
              <div className="overflow-y-auto max-h-[80px]">
                {dayEvents.map((event) => (
                  <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    link={event.link}
                    startTime={event.startTime}
                    compact={true}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
