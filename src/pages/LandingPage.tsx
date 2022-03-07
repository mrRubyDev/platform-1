import Footer from "components/Footer/Footer";
import { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import LoopGallery from "components/LoopGallery/LoopGallery";
import { PageBackground } from "components/PageBackground";
import "assets/demo/demo.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/css/nucleo-icons.css";

export const LandingPage = () => {
  useEffect(() => {
    document.body.classList.toggle("landing-page");
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <PageBackground>
          <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
              <h1 className="text-white">
                Artists & Collectors DAO <br />
              </h1>
              <p className="text-white mb-3">
                Poseidon DAO brings NFTs to the next step, enabling their
                  evolution. The DAO is built on top of the knowledge of a huge
                  collective of artists and collectors, in order to create a
                  decentralized entity that can lead NFTs and crypto art to
                  another level.
              </p>
              <div className="btn-wrapper">
                <div className="button-container">
                  <SocialIcon
                    className="social-icon"
                    target="_blank"
                    url="https://twitter.com/Poseidon_SF/"
                    bgColor="#4824fa"
                    fgColor="#FFF"
                  />
                  <SocialIcon
                    className="social-icon"
                    target="_blank"
                    url="https://discord.gg/gUsX8MpTqk"
                    bgColor="#4824fa"
                    fgColor="#FFF"
                  />
                  <SocialIcon
                    className="social-icon"
                    target="_blank"
                    url="https://instagram.com/poseidondao"
                    bgColor="#4824fa"
                    fgColor="#FFF"
                  />
                  <SocialIcon
                    className="social-icon"
                    target="_blank"
                    url="https://github.com/Poseidon-DAO"
                    bgColor="#4824fa"
                    fgColor="#FFF"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </PageBackground>
        <Row style={{ marginBottom: "1rem" }}>
          <LoopGallery>
            {[
              "-x-.jpg",
              "afternoon-garage.jpg",
              "ape.png",
              "basktopus.jpg",
              "clone1.png",
              "club50.jpg",
              "contemplation.jpg",
              "core-craving.jpg",
              "queen.png",
              "the-k-pop-is-dead-nft-.jpg",
              "punk.png",
              "what-a-dream-looks-like-.jpg",
            ].map((i: string) => (
              <img
                key={i}
                alt="..."
                className="img-fluid floating img-gallery"
                src={require(`assets/img/collection/${i}`).default}
              />
            ))}
          </LoopGallery>
        </Row>
        <Row style={{ marginBottom: "1rem" }}>
          <LoopGallery rtl={true} autoplaySpeed={700} speed={700}>
            {[
              "clone2.png",
              "eva-0.jpg",
              "feeling-lost-.jpg",
              "future-archaeology.jpg",
              "gigachad.png",
              "grifter.png",
              "hipster-farnese.jpg",
              "res-adversae.jpg",
              "searching-for-god.jpg",
              "the-wall-part2.jpg",
              "waiting.jpg",
              "world-11235.jpg",
            ].map((i: string) => (
              <img
                key={i}
                alt="..."
                className="img-fluid floating img-gallery"
                src={require(`assets/img/collection/${i}`).default}
              />
            ))}
          </LoopGallery>
        </Row>
        <Row style={{ marginBottom: "1rem" }}>
          <LoopGallery>
            {[
              "in-bocca-al-lupo.jpg",
              "kingsqueen.png",
              "limbus.jpg",
              "madonna-of-the-sacred-heart.jpg",
              "metahero.png",
              "mystic-lollipop.jpg",
              "r-e-c-o-v-e-r.png",
              "summermute.jpg",
              "torus.jpg",
              "squiggle.png",
              "wasteland.jpg",
              "ypj-womens-vs-long-beards-nft.jpg",
            ].map((i: string) => (
              <img
                key={i}
                alt="..."
                className="img-fluid floating img-gallery"
                src={require(`assets/img/collection/${i}`).default}
              />
            ))}
          </LoopGallery>
        </Row>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png").default}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-trophy text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">4</CardTitle>
                                <p />
                                <p className="card-category">Collections</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-spaceship text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">3000+</CardTitle>
                                <p />
                                <p className="card-category">NFTs</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-heart-2 text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">50+</CardTitle>
                                <p />
                                <p className="card-category">Artists</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-coins text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">$10M+</CardTitle>
                                <p />
                                <p className="card-category">Value</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      Large <br />
                      Treasury
                    </h1>
                    <p>
                      The DAO is built on top of a massive treasury made up of
                      historical NFTs, 1-of-1 and collectibles.
                    </p>
                    <br />
                    <p>
                      Poseidon valued art and artists investing in the long term
                      vision of digital art.
                    </p>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="https://opensea.io/PoseidonNftFund"
                      target="_blank"
                      rel="noreferrer"
                    >
                      OpenSea Collection
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="https://superrare.com/poseidonnftfund"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SuperRare Collection
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="https://foundation.app/@Poseidonnftfund"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Foundation Collection
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <Footer />
      </div>
    </>
  );
};
