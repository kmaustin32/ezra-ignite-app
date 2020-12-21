import React, {useEffect} from 'react';
//Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction'
//Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//Styling and Animation
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {useLocation} from 'react-router-dom';
import {FadeIn} from '../Animations';

const Home = () => {
    //Fetch Games
    const dispatch = useDispatch();
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch]);

    //Extract the new data from the store
    const {popular, newGames, upcoming, searched} = useSelector(state => state.games);
    
    return (
        <GameList 
        variants={FadeIn}
        initial="hidden"
        animate="show">
        <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
            {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
            <div className="searched">
            <h2>Searched Games</h2>
            <Games>
                {searched.map(game => (
                    <Game
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    key={game.id}
                    image={game.background_image} />
                ))}
            </Games>
            </div>
        ) : ''}
            <h2>Upcoming Games</h2> 
            <Games>
                {upcoming.map(game => (
                    <Game 
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    key={game.id}
                    image={game.background_image} />
                ))}
            </Games>
            <h2>Popular Games</h2> 
            <Games>
                {popular.map(game => (
                    <Game 
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    key={game.id}
                    image={game.background_image} />
                ))}
            </Games>
            <h2>New Games</h2> 
            <Games>
                {newGames.map(game => (
                    <Game 
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    key={game.id}
                    image={game.background_image} />
                ))}
            </Games>
            </AnimateSharedLayout>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 3rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;