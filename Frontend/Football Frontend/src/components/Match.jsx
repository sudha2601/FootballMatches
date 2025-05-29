import React from 'react';

const Match = ({ homeTeam, awayTeam, homeLogo, awayLogo, date, time, league, leagueLogo }) => {
  const formattedDate = new Date(`${date}T${time}`).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const formattedTime = new Date(`${date}T${time}`).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="bg-white shadow-md rounded-xl p-6 m-4 w-full max-w-xl mx-auto hover:shadow-lg transition">
      {/* League Name and Logo */}
      <div className="flex items-center justify-center mb-4 space-x-2">
        {leagueLogo && (
          <img src={leagueLogo} alt={league} className="w-6 h-6 object-contain" />
        )}
        <span className="text-sm text-blue-600 font-semibold">{league}</span>
      </div>

      <div className="flex items-center justify-between">
        {/* Home Team */}
        <div className="flex items-center space-x-2">
          <img src={homeLogo} alt={homeTeam} className="w-10 h-10 object-contain" />
          <span className="text-lg font-medium text-gray-800">{homeTeam}</span>
        </div>

        {/* VS */}
        <span className="text-sm text-gray-500 font-normal">vs</span>

        {/* Away Team */}
        <div className="flex items-center space-x-2">
          <img src={awayLogo} alt={awayTeam} className="w-10 h-10 object-contain" />
          <span className="text-lg font-medium text-gray-800">{awayTeam}</span>
        </div>
      </div>

      {/* Match Date and Time */}
      <div className="mt-4 text-sm text-gray-600 text-center">
        <div className="font-semibold">Date - {formattedDate}</div>
        <div className="text-xs">Time - {formattedTime}</div>
      </div>
    </div>
  );
};

export default Match;
