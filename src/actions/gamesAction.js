import axios from 'axios';
import {popularGamesUrl, upcomingGamesUrl, newGamesUrl, searchedGameUrl} from '../api';

//action creator

export const loadGames = () => async (dispatch) => {
    //Axios Fetch
    const popularData = await axios.get(popularGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results
        }
    })
};

export const fetchSearch = (game_name) => async (dispatch) => {
    //Fetch with Axios again
    const searched = await axios.get(searchedGameUrl(game_name));

    dispatch({
        type: 'FETCH_SEARCHED',
        payload: {
            searched: searched.data.results
        }
    });
};
