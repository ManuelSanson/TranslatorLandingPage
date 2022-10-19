import { useTranslation } from "react-i18next";
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();
    
    return (
        <footer className="footerContainer">
            <div className="footerInfoContainer">
                <div className='logoFollowMeContainer'>
                    <div className='footerTextLogoContainer'>
                        <img src="https://res.cloudinary.com/diqry3ihg/image/upload/v1666220135/TranslatorLandingPage/Logo_01_a4xnul.png" alt='MS Traducciones Logo'/>
                        <h2> MS Traducciones </h2>
                    </div>
                    <div className="linkedIn">
                        <h5> {t('FollowMe')} </h5><span><a href="https://www.linkedin.com/in/manuel-sanson-trans-dev/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png" alt="Linkedin logo"/></a></span>
                    </div>
                </div>
                <div className="contactDataContainer">
                    <div className="contactContainer">
                        <GoLocation className="locationPin"/>
                        <div className='domicile'>
                            <h5>Camino Castro 540</h5>
                            <h5>Montevideo, Uruguay</h5>
                        </div>
                    </div>
                    <div className="contactContainer">
                        <BsPhone className="cellphone"/>
                        <h5>(+598)98981698</h5>
                    </div>
                    <div className="contactContainer">
                        <AiOutlineMail className="email"/>
                        <h5>tp.msanson@gmail.com</h5>
                    </div>
                </div>
            </div>
            <div className="pt-5 pb-2 text-center">
                <h5> {t('ReservedRights')} </h5>
            </div>
        </footer>
    )
}

export default Footer;