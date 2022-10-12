import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';


const Header = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className='header'>
            <div className='headerTextLogoContainer'>
                <img src="" alt='MS Traducciones Logo'/>
                <h1> MS Traducciones </h1>
            </div>
            <div className='languageButtonsContainer'>
                <button onClick={() => changeLanguage('en')}> <img src='https://res.cloudinary.com/diqry3ihg/image/upload/c_scale,w_81/v1665611223/TranslatorLandingPage/US-UKFlag_msslku.png' alt='US-UK Flag'/>  English</button>
                <button onClick={() => changeLanguage('esp')}> <img src='https://res.cloudinary.com/diqry3ihg/image/upload/c_scale,h_56,w_81/v1665611223/TranslatorLandingPage/SpainFlag_bbhqmj.png' alt='Spanish Flag'/> Español</button>
            </div>
        </header>
    )
}

export default Header;