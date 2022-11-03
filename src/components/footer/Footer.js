import { useTranslation } from "react-i18next";
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();
    
    return (
        <footer className="footerContainer">
            <div className="footerInfoContainer">
                <div className='logoFollowMeContainer'>
                    <div className='footerTextLogoContainer'>
                        <img src="https://res.cloudinary.com/diqry3ihg/image/upload/v1667418506/TranslatorLandingPage/MSTraducciones_Logo_daheut.png" alt='MS Traducciones Logo'/>
                        <h2> MS Traducciones </h2>
                    </div>
                    <div className="linkedIn">
                        <h5> {t('LinkedInMessage')} </h5><span><a href="https://www.linkedin.com/in/manuel-sanson-trans-dev/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png" alt="Linkedin logo"/></a></span>
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
            <Nav className="footerNavBar">
                <Nav.Link as={Link} to='/' className="navLink"> {t('Home')}  </Nav.Link>
                <Nav.Link as={Link} to='aboutme' className="navLink"> {t('About me')} </Nav.Link>
                <Nav.Link as={Link} to='services' className="navLink"> {t('Services')} </Nav.Link>
                <Nav.Link as={Link} to='contact' className="navLink"> {t('Contact')} </Nav.Link>
            </Nav>
            <div className="pt-5 pb-2 text-center">
                <h6> {t('ReservedRights')} </h6>
            </div>
            <div className="development pt-2 pb-1 text-center">
                <h6> {t('Development')} </h6>
            </div>
        </footer>
    )
}

export default Footer;