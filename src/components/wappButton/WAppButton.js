import React from 'react';
import { useTranslation } from 'react-i18next';
import './WAppButton.css';

const WAppButton = () => {
    const { t } = useTranslation();

    return (
        <div className='test'>
            <div className='wappContainer'>
                <a href="https://wa.me/59898981698" data-action='box' data-phone='59898981698' data-message='hola' className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                    <h6> {t('WAppText')} </h6>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png' alt='WhatsApp Logo' className='logo'/>
                </a>
            </div>
        </div>
    )
}

export default WAppButton;