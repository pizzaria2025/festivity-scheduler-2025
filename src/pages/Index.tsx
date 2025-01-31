import Calendar from "@/components/Calendar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-calendar-secondary">
          Calendário de Marketing 2025
        </h1>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Index;