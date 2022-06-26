import React from 'react';

import './App.css';
import Header from "./components/Header";
import NavBAr from "./components/NavBar";
import ProFile from "./components/ProFile";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBAr/>
            <ProFile/>
        </div>
    );
}


export default App;
