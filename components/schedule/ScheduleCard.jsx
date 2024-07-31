import React from 'react';
import { FaUserTie } from 'react-icons/fa'; // Importing an icon for speaker representation

const ScheduleCard = ({ title, speakerName, speakerRole, time, location }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center transition-transform transform hover:scale-105">
      <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-2">
        <FaUserTie className="text-xl text-textPrimary" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{speakerName} / {speakerRole}</p>
      <div className="text-sm text-gray-500 mt-2">
        <p>{time}</p>
        <p>{location}</p>
      </div>
      {/* <button className="bg-blue-600 text-white hover:bg-blue-700 rounded px-3 py-1 text-sm mt-3">View More →</button> */}
    </div>
  );
};

export default ScheduleCard;
