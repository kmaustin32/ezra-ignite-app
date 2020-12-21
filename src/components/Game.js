import React from 'react';
//Style and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {PopUp} from '../Animations';
//Redux
import {useDispatch} from 'react-redux';
import {loadDetails} from '../actions/detailAction';
//Router
import {Link} from 'react-router-dom';
// Image
import {smallImage} from '../util';

const Game = ({name, released, image, id}) => {

    const stringId = id.toString();
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden'; 
        dispatch(loadDetails(id))
    }

    return(
        <Link to={`/game/${id}`}>
            <StyledGame 
            onClick={loadDetailHandler} 
            layoutId={stringId}
            variants={PopUp}
            initial="hidden"
            animate="show">
                <motion.h3 layoutId={`titile ${stringId}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringId}`} src={smallImage(image, 640)} alt={name}/>
            </StyledGame>
        </Link>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 35vh;
    box-shadow: 5px 5px 10px #757575;
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;