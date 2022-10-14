import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Resume from "./resume/Resume";

const AboutMe = () => {
    const { i18n, t } = useTranslation();
    const [resumeURL, setResumeURL] = useState("");
    const [resumeName, setResumeName] = useState("");
    useEffect(() => {
        if (i18n.language === 'esp') {
            setResumeURL("https://res.cloudinary.com/diqry3ihg/image/upload/v1665781272/TranslatorLandingPage/CV_Traductor_Manuel_Sanson_vd2cpu.jpg")
            setResumeName('CV Traductor Manuel Sanson Prado')
        }
        if (i18n.language === 'en') {
            setResumeURL("https://res.cloudinary.com/diqry3ihg/image/upload/v1665781272/TranslatorLandingPage/Resume_Translator_Manuel_Sanson_rjfiut.jpg")
            setResumeName('Resume Translator Manuel Sanson Prado')
        }
    }, [i18n.language])

    const saveFile = () => {
        saveAs(`${resumeURL}`, `${resumeName}`);
    };
    return (
        <main>
            <Resume/>
            <div className="text-center">
                <Button className="border m-5" variant='light' onClick={saveFile}> {t('DownloadResume')} </Button>
            </div>
        </main>
    )
}

export default AboutMe;