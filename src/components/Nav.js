import React from 'react';
//Style and Animations
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Nav = () => {
    return(
        <StyledNav>
            <StyledTitle>Ignite</StyledTitle>
            <div className="search">
                <input type="text"/>
                <button>Search</button>
            </div>
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
`;


export default Nav;