import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ProFile from "./components/Profile/ProFile";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            {/*<ProFile/>*/}
            <div className='app-wrapper-content'>
                <Dialogs/>
            </div>

        </div>
    );
}


export default App;
