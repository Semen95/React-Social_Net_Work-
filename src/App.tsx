import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import ProFile from "./components/Profile/ProFile";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path='profile/' element={<ProFile state={props.state.profilePage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
