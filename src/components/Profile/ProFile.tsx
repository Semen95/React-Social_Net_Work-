import React from "react";

import s from "./ProFile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const ProFile = () => {
    return (
        <div>
            <div>
                <img src="https://w-dog.ru/wallpapers/2/95/358079522881956/gory-pejzazh-vesnoj-toskana.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default ProFile;