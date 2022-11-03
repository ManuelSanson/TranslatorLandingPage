import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import './Contact.css';


//VER RESPONSIVE Y ADONDE ENVIAR MENSAJE
const Contact = () => {
    const { t } = useTranslation();

    const [emailAddress, setEmailAddress] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submitMessage = (e) => {
        e.preventDefault();
        if (emailAddress !== '' && subject !== '' && message !== '') {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${t('MessageSent')}`,
                showConfirmButton: false,
                timer: 1500
            }) 
            setEmailAddress('');
            setSubject('');
            setMessage('');
        }
    }

    const isDisabled = emailAddress === '' || subject === '' || message === ''

    return (
        <main className="contactFormContainer">
            <h2 className="text-center mt-4 mb-4"> {t('Help')} </h2>
            <h3 className="m-4"> {t('SendMessage')} </h3>
            <Container className="formContainer mb-4">
                <Form className="mt-4 contactForm">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label> {t('EmailAddress')} </Form.Label>
                        <Form.Control value={emailAddress} type="email" placeholder="name@example.com" onChange={(e) => setEmailAddress(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label> {t('Subject')} </Form.Label>
                        <Form.Control type="text" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label> {t('Message')} </Form.Label>
                        <Form.Control as="textarea" placeholder={t('Help')} rows={3} value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </Form.Group>
                </Form>
            </Container>
            <div className="mb-5 text-center">
                <Button disabled={isDisabled} size='md' onClick={submitMessage} variant="success"  className='button' type="submit">
                    {t('Submit')}
                </Button>
            </div>
            <div className="orContact">
                <div className="line"></div>
                <h6> {t('OR')} </h6>
                <div className="line"></div>
            </div>
            <div className="orContact communication">
                <div className="communicationMean">
                    <BsPhone />
                    <h6>(+598)98981698</h6>
                </div>
                <div className="communicationMean">
                    <AiOutlineMail/>
                    <h6>tp.msanson@gmail.com</h6>
                </div>
            </div>
        </main>
    )
}

export default Contact;