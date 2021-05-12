//import Counter from './components/Counter/CounterWithHooks';
// import Navb from './components/shared/navbar';
import React, { useState } from 'react';
import Head from './components/shared/head/Head';
import Excercises from './/components/Excersices/Excercises';
import Profile from './components/ProfileHome/ProfileHome';
import { excerE } from './assets/utils/constants';
import './App.css';

function App() {
    // const sayHello = () => {
    //     console.log("HELLOO!");
    // }

    // return ( 
    // <div className = "App" >
    // <Head className = "App-Head" >
    // < Counter maxValue = { 15 }
    // sayHi = { sayHello } >
    // <span > Hey you! </span> 
    // </Counter> 
    // </Head> 
    // </div >
    // );
    const [view, setView] = useState(excerE.PROFILE);

    const handleNavigation = (newView) => {
        setView(newView);
    }

    let content = null;

    switch (view) {
        case excerE.EXCERCISES:
            content = < Excercises/> ;
            break;
        case excerE.PROFILE:
        default:
            content = < Profile/> ;
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