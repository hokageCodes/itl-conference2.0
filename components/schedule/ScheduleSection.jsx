import React, { useState, useEffect } from 'react';
import ScheduleCard from './ScheduleCard';
import ScheduleTab from './ScheduleTab';
import Loader from '../../components/loader/Loader';

const ScheduleSection = () => {
  const [activeTabDate, setActiveTabDate] = useState('Thursday, April 3, 2025');
  const [isLoading, setIsLoading] = useState(true);

  const tabs = [
    { day: 'Thursday', date: 'Thursday, April 3, 2025' },
    { day: 'Friday', date: 'Friday, April 4, 2025' },
    { day: 'Saturday', date: 'Saturday, April 5, 2025' },
  ];

  const allEvents = [
    {
      title: 'Opening Ceremony',
      speakerName: 'TBD',
      speakerRole: 'TBD',
      time: '6pm - 9pm MST',
      date: 'Thursday, April 3, 2025',
      location: 'Calgary, Alberta',
    },
    {
      title: 'TBD',
      speakerName: 'TBD',
      speakerRole: 'TBD',
      time: '9am - 11am MST',
      date: 'Friday, April 4, 2025',
      location: 'Calgary, Alberta',
    },
    {
      title: 'TBD',
      speakerName: 'TBD',
      speakerRole: 'TBD',
      time: '11am - 1pm',
      date: 'Friday, April 4, 2025',
      location: 'Calgary, Alberta',
    },
    {
      title: 'TBD',
      speakerName: 'TBD',
      speakerRole: 'TBD',
      time: '1pm - 3pm',
      date: 'Friday, April 4, 2025',
      location: 'Calgary, Alberta',
    },
    {
      title: 'TBD',
      speakerName: 'TBD',
      speakerRole: 'TBD',
      time: '3pm - 5pm',
      date: 'Friday, April 4, 2025',
      location: 'Calgary, Alberta',
    },
    {
      title: 'The Impact Awards/Gala',
      speakerName: 'TBD',
      speakerRole: '',
      time: '6pm - 9pm MST',
      date: 'Saturday, April 5, 2025',
      location: 'Calgary, Alberta',
    },
  ];

  const eventsToShow = allEvents.filter((event) => event.date === activeTabDate);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="bg-white py-12">
      <div className={`container mx-auto px-4 ${isLoading ? 'hidden' : 'block'}`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-textPrimary">Conference Schedule</h2>
        </div>
        <div className="flex justify-center mb-8 space-x-4">
          {tabs.map((tab) => (
            <ScheduleTab
              key={tab.date}
              day={tab.day}
              date={tab.date}
              isActive={activeTabDate === tab.date}
              onClick={() => setActiveTabDate(tab.date)}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsToShow.map((event, index) => (
            <ScheduleCard
              key={index}
              title={event.title}
              speakerName={event.speakerName}
              speakerRole={event.speakerRole}
              time={event.time}
              location={event.location}
              icon={event.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
