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
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('esp')}>Español</button>
            </div>
        </header>
    )
}

export default Header;