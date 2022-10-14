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
        </div>    
    )
}

export default Banner;