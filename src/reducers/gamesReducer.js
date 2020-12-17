
const initState = {
    popular: [],
    upcoming: [],
    newGames:[],
    searched: []
};

const gamesReducer = (state=initState, action) => {
    switch(action.type) {
        case 'FETCH_GAMES':
            return {...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames
            }
        default:
            return {...state}
    }
}

export default gamesReducer;

//Action
//{type: DO_THING}
//dispatch({type: DO_THING})
//is how you change the state

//Action Creator
//A function that returns an action
//function fetchGames = () => {type: DO_THING}
//Apparently this is popular

//Payload with additonal data
//function fetchGames = (userData) => {type: DO_THING, payload: userData}
//so, in the reducer we can return {...state, action.payload}

//Redux Thunk is for Async Redux

//This is way more complicated than I expected
