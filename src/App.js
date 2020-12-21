import React from 'react';
//Componenets and Pages
import Home from './pages/Home';
import Nav from './components/Nav';
//Style
import GlobalStyle from './components/GlobalStyles';
//import { startAnimation } from 'framer-motion';
//Router
import {Route} from 'react-router-dom'; 



function App() {

    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Route path={['/game/:id', '/']}>
                <Home />
            </Route>
        </div>
    );
};

export default App;
