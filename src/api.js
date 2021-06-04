const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

//Base URL
const base_url = 'https://api.rawg.io/api/';

//Getting the current date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;

export const popularGamesUrl = () => {
    return `${base_url}${popular_games}`;
};

//Upcoming Games
const upcoming_games = `games?key=${REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`

export const upcomingGamesUrl = () => {
    return `${base_url}${upcoming_games}`;
};

//New Games
const new_games = `games?key=${REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const newGamesUrl = () => {
    return `${base_url}${new_games}`
};

//Game Details
export const getDetailsUrl = (game_id) => {
    return `${base_url}games/${game_id}`
}

//Game Screenshots
export const screenshotsUrl = (game_id) => {
    return `${base_url}games/${game_id}/screenshots`
}

//Searchd Game
export const searchedGameUrl = (game_name) => {
    return `${base_url}games?search=${game_name}&page_size=9`
}
