import React from "react";
import { Accordion, Button, Card, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import { useScrollToTop } from "../../context/ScrollToTopContext";

const Services = () => {
  const { t } = useTranslation();
  const { scrollToTop } = useScrollToTop();
  AOS.init();

  return (
    <main>
      <h2 className="m-5"> {t("Services")} </h2>
      {/* <section>
        <article data-aos={"zoom-in-right"} className="serviceContainer">
          <img
            src="https://res.cloudinary.com/diqry3ihg/image/upload/v1677705336/TranslatorLandingPage/OfficialTranslations_mlxvyc.png"
            alt="Official Translation"
            className="servicePicture"
          />
          <div className="serviceDescription">
            <h3> {t("OfficialTranslations")} </h3>
            <p> {t("OfficialTranslations1")} </p>
            <p> {t("OfficialTranslations2")} </p>
          </div>
        </article>
        <article data-aos={"zoom-in-right"} className="serviceContainer">
          <img
            src="https://res.cloudinary.com/diqry3ihg/image/upload/v1677705588/TranslatorLandingPage/NonOfficialTranslations_kksa7k.png"
            alt="Non-Official Translation"
            className="servicePicture"
          />
          <div className="serviceDescription">
            <h3> {t("NonOfficialTranslations")} </h3>
            <p> {t("NonOfficialTranslations1")} </p>
          </div>
        </article>
      </section> */}
      <Container>
        <section className="specializedServices">
          <Card
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="serviceCard bg-light align-items-center text-center m-1 mb-3"
          >
            <Card.Img
              variant="top"
              src="https://d1imjpjik7kc4g.cloudfront.net/images/5-Law-Firm-Titles-You-Should-Know-About-new.jpg"
              className="serviceCardImage"
            />
            <Card.Body>
              <Card.Title className="serviceCardTitle">
                {" "}
                <h3> {t("LegalTranslation")} </h3>{" "}
              </Card.Title>
              <Card.Text className="serviceCardText">
                {" "}
                {t("LegalTranslationDescription")}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="serviceCard bg-light align-items-center text-center m-1 mb-3"
          >
            <Card.Img
              variant="top"
              src="https://seisamed.com/wp-content/uploads/Clasificacion-y-funcion-de-equipos-medicos-para-hospitales.jpg"
              className="serviceCardImage"
            />
            <Card.Body>
              <Card.Title className="serviceCardTitle">
                {" "}
                <h3> {t("CLVTranslation")} </h3>{" "}
              </Card.Title>
              <Card.Text className="serviceCardText">
                {" "}
                {t("CLVTranslationDescription")}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="serviceCard bg-light align-items-center text-center m-1 mb-3"
          >
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1726062701/TranslatorLandingPage/academicDocs_ssbrax.png"
              className="serviceCardImage"
            />
            <Card.Body>
              <Card.Title className="serviceCardTitle">
                {" "}
                <h3> {t("PrivateDocumentTranslation")} </h3>{" "}
              </Card.Title>
              <Card.Text className="serviceCardText">
                {" "}
                {t("PrivateDocumentsTranslationDescription")}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
      </Container>
      <Container>
        <article className="introductionArticles">
          <h2> {t("Advantage")} </h2>
          <ul className="pt-3">
            <li>
              {" "}
              <p> {t("Advantage1")} </p>{" "}
            </li>
            <li>
              {" "}
              <p> {t("Advantage2")} </p>{" "}
            </li>
            <li>
              {" "}
              <p> {t("Advantage3")} </p>{" "}
            </li>
            <li>
              {" "}
              <p> {t("Advantage4")} </p>{" "}
            </li>
          </ul>
        </article>
      </Container>
      <div className="m-5 text-center">
        <p className="getInTouch"> {t("GetInTouch")} </p>
        <Button
          variant="light"
          className="getInTouchButton m-3 border button"
          as={Link}
          to="/contact"
          onClick={scrollToTop}
        >
          {" "}
          {t("ContactMe")}{" "}
        </Button>
      </div>
      <Container className="p-3 mb-5 questionsContainer">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header> {t("Question1")} </Accordion.Header>
            <Accordion.Body> {t("Answer1")} </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header> {t("Question2")} </Accordion.Header>
            <Accordion.Body> {t("Answer2")} </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header> {t("Question7")} </Accordion.Header>
            <Accordion.Body> {t("Answer7")} </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header> {t("Question3")} </Accordion.Header>
            <Accordion.Body> {t("Answer3")} </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header> {t("Question4")} </Accordion.Header>
            <Accordion.Body> {t("Answer4")} </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header> {t("Question5")} </Accordion.Header>
            <Accordion.Body> {t("Answer5")} </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header> {t("Question6")} </Accordion.Header>
            <Accordion.Body> {t("Answer6")} </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </main>
  );
};

export default Services;
