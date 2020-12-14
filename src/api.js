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
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

console.log('DEBUG current day: ' + currentDay);
console.log('DEBUG current fullDate: ' + currentDate);
console.log('DEBUG nextYear: ' + nextYear);
console.log('DEBUG lastYear: ' + lastYear);

export const popularGamesUrl = () => {
    return `${base_url}${popular_games}`;
}
