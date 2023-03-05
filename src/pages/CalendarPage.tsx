import { useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="default w-full">
      <Calendar className="default h-full" onChange={onChange} value={value} />
    </div>
  );
};
