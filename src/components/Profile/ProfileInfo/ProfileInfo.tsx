import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src="https://w-dog.ru/wallpapers/2/95/358079522881956/gory-pejzazh-vesnoj-toskana.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;

