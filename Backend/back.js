const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

// Your actual API key
const API_KEY = '5086ccafa290f9f367d91271b8afa7f6181a026082f804de5f74572080dae626';

// Function to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

// Function to get the date 7 days from today
const getNextWeekDate = () => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 12);
    return nextWeek.toISOString().slice(0, 10);
};

app.get('/api/matches', async (req, res) => {
    const today = getTodayDate();
    const nextWeek = getNextWeekDate();

    try {
        const response = await axios.get(`https://apiv2.allsportsapi.com/football/`, {
            params: {
                met: 'Fixtures',
                APIkey: API_KEY,
                from: today,
                to: nextWeek,
            },
        });

        console.log('API response:', response.data); // Debugging output

        if (response.data.success !== 1 || !response.data.result) {
            return res.status(400).json({ error: 'No matches found', raw: response.data });
        }

        const matches = response.data.result
            .map(match => ({
                leagueName: match.league_name,
                homeTeam: match.event_home_team,
                awayTeam: match.event_away_team,
                date: match.event_date,
                time: match.event_time,
                homeLogo: match.home_team_logo,
                awayLogo: match.away_team_logo,
                leagueLogo: match.league_logo,
            }))
            .sort((a, b) => {
                const dateTimeA = new Date(`${a.date}T${a.time}`);
                const dateTimeB = new Date(`${b.date}T${b.time}`);
                return dateTimeA - dateTimeB;
            });


        res.json(matches);
    } catch (error) {
        console.error('Axios error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch match data' });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});
