import { SocialIcon } from "react-social-icons";
import { Col, Container, Nav, NavItem, NavLink, Row } from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="2">
            <img
              alt="..."
              className="logo img-fluid rounded"
              src={require("assets/img/logo-transparent.png").default}
            />
          </Col>
          <Col md="2">
            <Nav>
              <NavLink href="/artist_form">Artist Submission</NavLink>
            </Nav>
          </Col>
          <Col md="2">
            <Nav>
              <NavItem>
                <NavLink
                  href="https://opensea.io/PoseidonNftFund"
                  target="_blank"
                  rel="noreferrer"
                >
                  OpenSea
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://superrare.com/poseidonnftfund"
                  target="_blank"
                  rel="noreferrer"
                >
                  SuperRare
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://foundation.app/@Poseidonnftfund"
                  target="_blank"
                  rel="noreferrer"
                >
                  Foundation
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="2">
            <Nav>
              <NavItem>
                <NavLink
                  href="mailto://info@poseidonnft.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://mirror.xyz/0x4Ac0eaC004c87e43a8D52CAC8B431FEaFBb9B62b"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://poseidongroup.ch/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Group
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="4">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
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
                fgColor="#fff"
              />
              <SocialIcon
                className="social-icon"
                target="_blank"
                url="https://instagram.com/poseidondao"
                bgColor="#4824fa"
                fgColor="#fff"
              />
              <SocialIcon
                className="social-icon"
                target="_blank"
                url="https://github.com/Poseidon-DAO"
                bgColor="#4824fa"
                fgColor="#fff"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
