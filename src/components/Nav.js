import React, {useState} from 'react';
//Style and Animations
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {FadeIn} from '../Animations';
//Redux and Routes
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';


const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('');

    const inputHandler = (event) => {
        setTextInput(event.target.value);
    };

    const sumbitSearch = (event) => {
        event.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    };

    const clearSearch = () => {
        dispatch({
            type: "CLEAR_SEARCH"
        })
    }

    return(
        <StyledNav
        variants={FadeIn}
        initial="hidden"
        animate="show">
            <StyledTitle>Ignite</StyledTitle>
            <form className="search">
                <input type="text" value={textInput} onChange={inputHandler}/>
                <button type='submit' onClick={sumbitSearch}>Search</button>
                <button style={{backgroundColor: '#FF6666'}} type='submit' onClick={clearSearch}>Clear</button>
            </form>
        </StyledNav>
    )
};

const StyledNav = styled(motion.nav)`
    padding: 0rem 2rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: .5rem;
        border: none;
        outline: none;
        box-shadow: 5px 5px 10px #757575;
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: .5rem 2rem;
        cursor: pointer;
        color: white;
        background-color: #FFB266;
        box-shadow: 5px 5px 10px #757575;
    }
`;

const StyledTitle = styled(motion.h3)`
    font-weight: bold;
    font-size: 2rem;
    cursor: pointer;
`;


export default Nav;