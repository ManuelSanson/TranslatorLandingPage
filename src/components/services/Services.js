import React from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

const Services = () => {
    const { t } = useTranslation();
    AOS.init()
    return (
        <main>
            <h2 className='m-5'> {t('Services')} </h2>
            <section>
                <article data-aos={"zoom-in-right"} className='serviceContainer'>
                    <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1665862925/TranslatorLandingPage/OfficialTranslationPicture1_mc7v69.jpg' alt='Official Translation' className='servicePicture'/>
                    <div className='serviceDescription'>
                        <h3> {t('OfficialTranslations')} </h3>
                        <p> {t('OfficialTranslations1')} </p>
                        <p> {t('OfficialTranslations2')} </p>
                        <p> {t('OfficialTranslations3')} </p>
                    </div>
                </article>
                <article data-aos={"zoom-in-right"} className='serviceContainer'>
                    <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1665864039/TranslatorLandingPage/NonOfficialTranslationPicture1_tyxsad.jpg' alt='Non-Official Translation' className='servicePicture'/>
                    <div className='serviceDescription'>
                        <h3> {t('NonOfficialTranslations')} </h3>
                        <p> {t('NonOfficialTranslations1')} </p>
                        <p> {t('NonOfficialTranslations2')} </p>
                    </div>
                </article>
                <article data-aos={"zoom-in-right"} className='serviceContainer'>
                    <img src='https://res.cloudinary.com/diqry3ihg/image/upload/v1665864761/TranslatorLandingPage/AudiovisualTranslation_lb7sd2.png' alt='Audiovisual Translation' className='servicePicture'/>
                    <div className='serviceDescription'>
                        <h3> {t('AudiovisualTranslations')} </h3>
                        <p> {t('AudiovisualTranslations1')} </p>
                        <p> {t('AudiovisualTranslations2')} </p>
                    </div>
                </article>
            </section>
            <div className="m-5 text-center">
                <p className="getInTouch"> {t('GetInTouch')} </p>
                <Button variant='light' className="getInTouchButton m-3 border" as={Link} to='/contact'> {t('ContactMe')} </Button>
            </div>
        </main>
    )
}

export default Services;