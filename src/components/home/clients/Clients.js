import React from "react";
import { Card, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
// import AwesomeSlider from "react-awesome-slider";
// import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./Clients.css";
import AOS from "aos";

const Clients = () => {
  const { t } = useTranslation();
  // const AutoplaySlider = withAutoplay(AwesomeSlider);
  AOS.init();

  return (
    <section className="clientsSection">
      {/* <Container className="pt-4 mb-4">
        <h2> {t("MyClients")} </h2>
      </Container>

      <Container className="carouselContainer text-center">
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={1200}>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1668535940/TranslatorLandingPage/mvs-logo_hmpr6i.jpg"
              alt="MVS Abogados Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1668536015/TranslatorLandingPage/moove-it-logo_xln47s.jpg"
              alt="Moove It Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1668536018/TranslatorLandingPage/bonaudi-logo_cdccho.jpg"
              alt="Bonaudi Abogados Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1693252508/TranslatorLandingPage/LogoUnionDisprofarma_elgpg6.jpg"
              alt="Disprofarma Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1693252505/TranslatorLandingPage/atgenlogo_jlt83x.jpg"
              alt="AtGen Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1710512572/TranslatorLandingPage/marco_xt5m1n.jpg"
              alt="Marco Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1710512572/TranslatorLandingPage/celsius_qxacnj.jpg"
              alt="Celsius Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1710512666/TranslatorLandingPage/arcos_yptcec.jpg"
              alt="Arcos Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1710512876/TranslatorLandingPage/imedicines_lotk4b.jpg"
              alt="Imedicines Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1725910199/TranslatorLandingPage/umpierrezBlengio_ifz7b6.png"
              alt="Umpierrez Blengio Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1725910338/TranslatorLandingPage/sakiraMedical_d1chns.png"
              alt="Sakira Medical Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1725910536/TranslatorLandingPage/farmacoUruguayo_vnqzom.png"
              alt="Farmaco Uruguayo Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1725910636/TranslatorLandingPage/fragomen_iejk2y.png"
              alt="Fragomen Logo"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1725910764/TranslatorLandingPage/pointAmericas_iwhr5z.png"
              alt="Point Americas Logo"
            />
          </div>
        </AutoplaySlider>
      </Container> */}

      <Container className="pt-4 mb-4">
        <h2> {t("Opinions")} </h2>
      </Container>

      <Container className="pt-4 mb-4">
        <section className="opinions">
          <Card
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="clientCard bg-light align-items-center text-center m-1 mb-3"
          >
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1693257688/TranslatorLandingPage/g.torres-modified_nox1et.png"
              className="clientCardImage"
            />
            <Card.Body>
              <Card.Title className="clientCardTitle">
                {" "}
                <h3> {t("PositionTorres")} </h3>{" "}
              </Card.Title>
              <Card.Text className="clientCardText">
                {" "}
                {t("OpinionTorres")}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="clientCard bg-light align-items-center text-center m-1 mb-3"
          >
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1693336603/TranslatorLandingPage/caco-modified_tgt3da.png"
              className="clientCardImage"
            />
            <Card.Body>
              <Card.Title className="clientCardTitle">
                {" "}
                <h3> {t("PositionBonaudi")} </h3>{" "}
              </Card.Title>
              <Card.Text className="clientCardText">
                {" "}
                {t("OpinionBonaudi")}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            data-aos={"fade-up"}
            data-aos-duration={"800"}
            className="clientCard bg-light align-items-center text-center m-1 mb-3"
          >
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1693336605/TranslatorLandingPage/ferra-modified_heqa6l.png"
              className="clientCardImage"
            />
            <Card.Body>
              <Card.Title className="clientCardTitle">
                {" "}
                <h3> {t("PositionFerragut")} </h3>{" "}
              </Card.Title>
              <Card.Text className="clientCardText">
                {" "}
                {t("OpinionFerragut")}{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </section>
      </Container>
    </section>
  );
};

export default Clients;
