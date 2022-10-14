import { Button, Card, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Introduction.css';

const Introduction = () => {
    const { t } = useTranslation();
    AOS.init()
    return (
        <section className="introductionSection">
            <Container className="pt-2">
                <article className="introductionArticles">
                    <h2> {t('Welcome')} </h2>
                    <p> {t('IntroductionText')} </p>
                    <div className='text-center'>
                        <Button variant='light' as={Link} to='aboutme'> {t('ReadMore')} </Button>
                    </div>
                </article>
                <article className="introductionArticles">
                    <h3> {t('Services')} </h3>
                    <p> {t('ServicesIntroductionText')} </p>
                    <div className='text-center'>
                        <Button variant='light' as={Link} to='services'> {t('ReadMore')} </Button>
                    </div>
                </article>
                <article className="guarantees">
                    <Card data-aos={"fade-right"} data-aos-duration={"800"} className='guaranteeCard bg-light align-items-center text-center m-1 mb-3'>
                        <Card.Img variant="top" src="https://thedenverdentists.com/wp-content/uploads/2019/01/Checkmark-circle-blue.png" className="cardImage"/>
                        <Card.Body>
                            <Card.Title className="cardTitle"> <h3> {t('Quality')} </h3> </Card.Title>
                            <Card.Text className="cardText"> {t('QualityText')} </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card data-aos={"fade-left"} data-aos-duration={"800"} className='guaranteeCard bg-light align-items-center text-center m-1'>
                        <Card.Img variant="top" src="https://www.shareicon.net/data/512x512/2017/06/21/887416_clock_512x512.png" className="cardImage"/>
                        <Card.Body className="justify-content-center">
                            <Card.Title className="cardTitle"> <h3> {t('Speed')} </h3> </Card.Title>
                            <Card.Text className="cardText"> {t('SpeedText')} </Card.Text>
                        </Card.Body>
                    </Card>
                </article>
            </Container>
        </section>
    )
}

export default Introduction;