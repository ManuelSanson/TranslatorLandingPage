import { Card, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Introduction.css";

const Introduction = () => {
  const { t } = useTranslation();
  AOS.init();

  return (
    <section className="introductionSection">
      <Container className="pt-2">
        <section>
          <article className="mt-5">
            {" "}
            <h2 className="text-center">{t("Help")}</h2>{" "}
          </article>

          <article className="activityArticlesContainer">
            {/* <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1725395544/TranslatorLandingPage/PictureComputer2_tuxiv9.jpg"
              alt="TranslatorPicture"
            /> */}
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1737497877/TranslatorLandingPage/legalDocTranslationImg_fb6xku.png"
              alt="TranslatorPicture"
            />

            <div className="d-flex flex-column">
              <h4>{t("LegalDocumentsTranslation")}</h4>
              <p>{t("LegalDocumentsTranslationDescription")}</p>
            </div>
          </article>

          <article className="activityArticlesContainer productRegistrationDocumentsTranslation">
            <div className="d-flex flex-column">
              <h4>{t("ProductRegistrationDocumentsTranslation")}</h4>
              <p>{t("ProductRegistrationDocumentsTranslationDescription")}</p>
            </div>

            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1737497878/TranslatorLandingPage/scientificDocTranslationImg_h83ebp.png"
              alt="TranslatorPicture"
            />
            {/* <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1725394731/TranslatorLandingPage/PictureComputer_nmco3g.jpg"
              alt="TranslatorPicture"
            /> */}
          </article>

          <article className="activityArticlesContainer">
            <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1737498021/TranslatorLandingPage/privateDocTranslatinImg_mvd8od.jpg"
              alt="TranslatorPicture"
            />
            {/* <img
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1725467098/TranslatorLandingPage/PictureComputer3-Photoroom_nqgnih.png"
              alt="TranslatorPicture"
            /> */}

            <div className="d-flex flex-column">
              <h4>{t("PrivateDocumentsTranslation")}</h4>
              <p>{t("PrivateDocumentsTranslationDescription")}</p>
            </div>
          </article>
        </section>
        <article className="guarantees">
          <Card className="guaranteeCard bg-light align-items-center text-center m-1 mb-3">
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1667425554/TranslatorLandingPage/verlogo_wg5qxu.png"
              className="cardImage"
            />
            <Card.Body>
              <Card.Title className="cardTitle">
                {" "}
                <h3> {t("Quality")} </h3>{" "}
              </Card.Title>
              <Card.Text className="cardText"> {t("QualityText")} </Card.Text>
            </Card.Body>
          </Card>
          <Card className="guaranteeCard bg-light align-items-center text-center m-1 mb-3">
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/diqry3ihg/image/upload/v1667426131/TranslatorLandingPage/clockLogo_wfwn8k.png"
              className="cardImage"
            />
            <Card.Body className="justify-content-center">
              <Card.Title className="cardTitle">
                {" "}
                <h3> {t("Speed")} </h3>{" "}
              </Card.Title>
              <Card.Text className="cardText"> {t("SpeedText")} </Card.Text>
            </Card.Body>
          </Card>
        </article>
        <article className="introductionArticles problemsSolutions">
          <h3> {t("ProblemsSolutions")} </h3>
          <p> {t("ProblemsText")} </p>
          <p> {t("SolutionsText")} </p>
        </article>
      </Container>
    </section>
  );
};

export default Introduction;
