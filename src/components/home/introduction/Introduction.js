import { Button, Card, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import './Introduction.css';

const Introduction = () => {
    const { t } = useTranslation();
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
                    <Card className='bg-light align-items-center text-center' style={{ width: '28rem' }}>
                        <Card.Img variant="top" src="https://thedenverdentists.com/wp-content/uploads/2019/01/Checkmark-circle-blue.png" className="cardImage"/>
                        <Card.Body>
                            <Card.Title> <h3> {t('Quality')} </h3> </Card.Title>
                            <Card.Text> {t('QualityText')} </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='bg-light align-items-center text-center' style={{ width: '28rem' }}>
                        <Card.Img variant="top" src="https://www.shareicon.net/data/512x512/2017/06/21/887416_clock_512x512.png" className="cardImage"/>
                        <Card.Body className="justify-content-center">
                            <Card.Title> <h3> {t('Speed')} </h3> </Card.Title>
                            <Card.Text> {t('SpeedText')} </Card.Text>
                        </Card.Body>
                    </Card>
                </article>
            </Container>
        </section>
    )
}

export default Introduction;