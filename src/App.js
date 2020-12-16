import React from 'react';
//Componenets and Pages
import Home from './pages/Home';
//Style
import GlobalStyle from './components/GlobalStyles';
//import { startAnimation } from 'framer-motion';


function App() {

    return (
        <div className="App">
            <GlobalStyle />
            <Home />
        </div>
    );
};

export default App;
