import React from 'react';
//Style and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import {useDispatch} from 'react-redux';
import {loadDetails} from '../actions/detailAction';


const Game = ({name, released, image, id}) => {

    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetails(id))
    }

    return(
        <StyledGame onClick={loadDetailHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name}/>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 35vh;
    box-shadow: 5px 5px 10px #757575;
    text-align: center;
    border-radius: 1rem;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;