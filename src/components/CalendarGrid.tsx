import { MarketingDate } from "@/utils/marketingDates";

interface CalendarGridProps {
  currentDate: Date;
  events: MarketingDate[];
}

const CalendarGrid = ({ currentDate, events }: CalendarGridProps) => {
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const getEventsForDay = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.filter((event) => event.date === dateStr);
  };

  return (
    <div className="grid grid-cols-7 gap-2">
      {weekDays.map((day) => (
        <div
          key={day}
          className="text-center py-2 text-sm font-semibold text-calendar-muted"
        >
          {day}
        </div>
      ))}
      
      {Array.from({ length: firstDayOfMonth }).map((_, index) => (
        <div key={`empty-${index}`} className="h-24 bg-gray-50 rounded-lg" />
      ))}
      
      {Array.from({ length: daysInMonth }).map((_, index) => {
        const day = index + 1;
        const dayEvents = getEventsForDay(day);
        
        return (
          <div
            key={day}
            className={`h-24 p-2 rounded-lg border ${
              dayEvents.length > 0
                ? "border-calendar-primary bg-calendar-primary/5"
                : "border-gray-200"
            }`}
          >
            <div className="font-medium text-sm">{day}</div>
            {dayEvents.map((event) => (
              <div
                key={event.title}
                className="mt-1 text-xs p-1 rounded bg-calendar-primary text-white truncate"
                title={event.title}
              >
                {event.title}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;