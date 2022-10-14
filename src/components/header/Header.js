import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className='header'>
            <Link to='/' className='headerTextLogoContainer'> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/%C3%86toms_-_Translation.svg/800px-%C3%86toms_-_Translation.svg.png" alt='MS Traducciones Logo'/>
                <h1> MS Traducciones </h1>       
            </Link>
            <div className='languageButtonsContainer'>
                <button onClick={() => changeLanguage('en')}> <img src='https://res.cloudinary.com/diqry3ihg/image/upload/c_scale,w_81/v1665611223/TranslatorLandingPage/US-UKFlag_msslku.png' alt='US-UK Flag'/> <p>English</p> </button>
                <button onClick={() => changeLanguage('esp')}> <img src='https://res.cloudinary.com/diqry3ihg/image/upload/c_scale,h_56,w_81/v1665611223/TranslatorLandingPage/SpainFlag_bbhqmj.png' alt='Spanish Flag'/> <p>Español</p> </button>
            </div>
        </header>
    )
}

export default Header;