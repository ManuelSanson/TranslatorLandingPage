import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import './Banner.css'

const Banner = () => {
    const { t } = useTranslation();
    AOS.init();

    return (
        <div className="bannerContainer">
            <img src="https://res.cloudinary.com/diqry3ihg/image/upload/v1665607323/TranslatorLandingPage/Banner_w440ou.png" alt="Manuel Sanson Banner"/>
            <div className='bannerText' data-aos={"zoom-in"} data-aos-duration={"2000"}>
                <h2> Manuel Sanson Prado </h2>
                <h3> {t('BannerTitle')} </h3>
                <h5> {t('BannerSubtitle')} </h5>
            </div>
        </div>    
    )
}

export default Banner;