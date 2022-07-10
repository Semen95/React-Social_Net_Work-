import React from 'react';


let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 0},
            {id: 2, message: "It's my first post", likesCount: 23},
            {id: 3, message: "blalala", likesCount: 6},
            {id: 4, message: "It's my forty post", likesCount: 14},
        ],

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Victor"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"}
        ]
    },
    siteBar:{    }
}

export default state;