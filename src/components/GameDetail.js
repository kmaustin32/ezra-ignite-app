import React from 'react';
//Styles and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import {useSelector} from 'react-redux'
//History
import {useHistory} from 'react-router-dom';
//Image
import {smallImage } from '../util'

const GameDetail = ({pathId}) => {
    //Data
    const {screen, game, isLoading} = useSelector(state => state.detail);
    const history = useHistory();

    //Exit Details
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains = 'shadow') {
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    }


    return (
        <>
        {!isLoading && (
            <CardShadow class='shadow' onClick={exitDetailHandler}>
                <Detail layoutId={pathId}>
                    <Stats>
                        <div className="rating">
                            <motion.h3 layoutId={`titile ${pathId}`}>{game.name}</motion.h3>
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
                        <motion.img
                        layoutId={`image ${pathId}`} 
                        src={smallImage(game.background_image, 1280)}
                        alt='' />
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <Gallery>
                        {screen.results.map(screen => (
                            <img 
                            src={smallImage(screen.image, 1280)} 
                            key={screen.id} 
                            alt='' />
                        ))}
                    </Gallery>
                </Detail>
            </CardShadow>
        )};
        </>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.7);
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
        height: 70vh;
        object-fit: cover;
        margin: 1rem 0rem;
        border: 5px outset black;
        box-shadow: 5px 5px 10px #757575;
        border-radius: 1rem;
    }
`;

export default GameDetail;