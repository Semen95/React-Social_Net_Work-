import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 0},
    {id: 2, message: "It's my first post", likesCount: 23},
    {id: 3, message: "blalala", likesCount: 6},
    {id: 4, message: "It's my forty post", likesCount: 14},
]

let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Sveta"},
    {id: 4, name: "Victor"}
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How is your it-kamasutra?"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"}
]

root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);


reportWebVitals();
