import React, { useEffect, useState } from 'react';
import Match from './match';

const Matches = () => {
    const [matches, setMatches] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5); // Show first 5 matches initially
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/matches');
                const data = await response.json();

                if (response.ok) {
                    setMatches(data);
                } else {
                    setError(data.error || 'Failed to fetch matches');
                }
            } catch (err) {
                setError('Error fetching match data');
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, []);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 5); // Show 5 more each time
    };

    if (loading) {
        return <div className="text-center text-lg mt-10 text-gray-600">Loading matches...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-10">{error}</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 border-b pb-4">Upcoming Football Matches</h2>
                <div className="flex flex-col gap-6">
                    {matches.slice(0, visibleCount).map((match, index) => (
                        <Match
                            key={index}
                            homeTeam={match.homeTeam}
                            awayTeam={match.awayTeam}
                            homeLogo={match.homeLogo}
                            awayLogo={match.awayLogo}
                            date={match.date}
                            time={match.time}
                            league={match.leagueName}
                            leagueLogo={match.leagueLogo}
                        />
                    ))}
                </div>

                {visibleCount < matches.length && (
                    <div className="mt-8 flex justify-center">
                        <button
                            onClick={handleShowMore}
                            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow transition"
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Matches;
