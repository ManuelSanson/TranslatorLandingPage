import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const { t } = useTranslation();
    AOS.init();

    return (
        <div className="bannerContainer">
            <div className='bannerText' data-aos={"zoom-in"} data-aos-duration={"2000"}>
                <h2> Manuel Sanson Prado </h2>
                <h3> {t('BannerTitle')} </h3>
                <h5> {t('BannerSubtitle')} </h5>
                <Button variant='light' as={Link} to='contact' className='contactButton'> {t('ContactMe')} </Button>
            </div>
        </div>    
    )
}

export default Banner;