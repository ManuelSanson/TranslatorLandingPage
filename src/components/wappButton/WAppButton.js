import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './WAppButton.css';

const WAppButton = () => {
    const { t, i18n } = useTranslation();
    const [WPMessage, setWPMessage] = useState("");

    useEffect(() => {
        if (i18n.language === 'en') {
            setWPMessage('https://wa.me/59898981698?text=Hi%2C%20I%20was%20browsing%20your%20website%20and%20I%20have%20a%20question')
        }
        if (i18n.language === 'esp') {
            setWPMessage('https://wa.me/59898981698?text=Hola%2C%20estaba%20mirando%20tu%20sitio%20web%20y%20tengo%20una%20consulta')
        } 
    }, [i18n.language])

    return (
        <div className='WApp'>
            <div className='wappContainer'>
                <a href={WPMessage} data-action='box' className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                    <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1667423165/TranslatorLandingPage/WAPP_Logo_khcqnx.png' alt='WhatsApp Logo' className='logo'/>
                </a>
                <h6 className='talkToMe'> {t('WAppText')} </h6>
            </div>
        </div>
    )
}

export default WAppButton;