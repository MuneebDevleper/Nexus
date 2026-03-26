import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

interface Event {
  title: string;
  start: string;
  status: 'Pending' | 'Confirmed';
}

const MeetingCalendar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [events, setEvents] = useState<Event[]>([
    // Example initial meeting
    { title: 'Team Meeting', start: '2026-03-28', status: 'Confirmed' },
  ]);

  const handleDateClick = (info: any) => {
    const title = prompt('Enter meeting title:');
    if (title) {
      setEvents([...events, { title, start: info.dateStr, status: 'Pending' }]);
    }
  };

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  return (
    <div className="p-4 border rounded-lg shadow bg-white mb-4">
      {/* Heading + Show/Hide Button */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">Meeting Calendar</h2>
        <button
          onClick={toggleCalendar}
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:scale-105 transition-all duration-200`}
        >
          {showCalendar ? 'Hide Calendar' : 'Show Calendar'}
        </button>
      </div>

      {/* Calendar Box */}
      {showCalendar && (
        <div className="border rounded-lg shadow-lg p-4 bg-white mt-2  w-[900PX] h-[400px]">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events.map(e => ({ title: `${e.title} (${e.status})`, start: e.start }))}
            height="100%"
            dateClick={handleDateClick}
          />
        </div>
      )}

      {/* Meetings Flex Display – Always Visible */}
      {events.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {events.map((e, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-3 shadow hover:shadow-lg transition-all duration-200 bg-gray-50 flex-1 min-w-[200px]"
            >
              <h3 className="font-semibold text-lg">{e.title}</h3>
              <p>Status: <span className="font-medium">{e.status}</span></p>
              <p>Date: <span className="font-medium">{e.start}</span></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MeetingCalendar;