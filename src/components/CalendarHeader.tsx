import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarHeader = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
}: CalendarHeaderProps) => {
  const monthYear = currentDate.toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-semibold capitalize text-calendar-secondary">
        {monthYear}
      </h2>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevMonth}
          className="hover:bg-calendar-primary/10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onNextMonth}
          className="hover:bg-calendar-primary/10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CalendarHeader;