import React from 'react';
//Styles and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import {useSelector} from 'react-redux'

const GameDetail = () => {
    //Data
    const {screen, game} = useSelector(state => state.detail);
    
    return (
        <CardShadow>
            <Detail>
                <Stats>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map(item => (
                                <h3 key={item.platform.id}>{item.platform.name}</h3>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <img 
                    src={game.background_image}
                    alt='' />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <Gallery>
                    {screen.results.map(screen => (
                        <img 
                        src={screen.image} 
                        key={screen.id} 
                        alt='' />
                    ))}
                </Gallery>
            </Detail>
        </CardShadow>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: .5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgray;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 8rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
        border: 5px outset black;
        box-shadow: 5px 5px 10px #757575;
        border-radius: 1rem;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

const Gallery = styled(motion.div)`
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
        margin: 1rem 0rem;
        border: 5px outset black;
        box-shadow: 5px 5px 10px #757575;
        border-radius: 1rem;
    }
`;

export default GameDetail;