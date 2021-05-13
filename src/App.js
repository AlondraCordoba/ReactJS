import React, { useState } from 'react';
import Head from './components/common/head/Head';
import Excercises from './components/Excersices/Excercises';
import Profile from './components/ProfileHome/ProfileHome';
import { excerE } from './utils/constants';
import './App.css';

function App() {
    const [view, setView] = useState(excerE.PROFILE);
    const handleNavigation = (newView) => {
        setView(newView);
    }

    let content = null;

    switch (view) {
        case excerE.EXCERCISES:
            content = < Excercises /> ;
            break;
        case excerE.PROFILE:
        default:
            content = < Profile /> ;
    }

    return ( 
        <div>
        <Head view = { view }
        onNav = { handleNavigation }
        />
        { content } 
        </div>
    );
}

export default App;