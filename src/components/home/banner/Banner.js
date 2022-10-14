import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Banner.css'

const Banner = () => {
    const { i18n } = useTranslation();
    const [imgURL, setImgURL] = useState("");

    useEffect(() => {
        if (i18n.language === 'esp') {
            setImgURL('https://res.cloudinary.com/diqry3ihg/image/upload/v1665764165/TranslatorLandingPage/BannerEsp_oeyqva.png')
        } 
        if (i18n.language === 'en') {
            setImgURL('https://res.cloudinary.com/diqry3ihg/image/upload/v1665764165/TranslatorLandingPage/BannerEng_j5l06p.png')
        }
    }, [i18n.language])
    



    return (
        <div className="bannerContainer">            
            <img id='banner' src={imgURL} alt='Banner'/>
            
            {/* <div className='bannerText' data-aos={"zoom-in"} data-aos-duration={"2000"}>
                <h2> Manuel Sanson Prado </h2>
                <h3> {t('BannerTitle')} </h3>
                <h5> {t('BannerSubtitle')} </h5>
                <Button variant='light' as={Link} to='contact' className='contactButton'> {t('ContactMe')} </Button>
            </div> */}
        </div>    
    )
}

export default Banner;