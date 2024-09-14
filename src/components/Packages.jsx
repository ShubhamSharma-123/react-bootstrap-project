import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Packages.css"; // Custom CSS
import icon1 from '../assets/Screenshot (171).png'
import icon2 from '../assets/Screenshot (170).png'

function Packages() {
  return (
    <section style={{paddingBlock:"120px"}} className="packages-section  d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Title and Text */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="section-title">Approachable Packages</h2>
            <p className="section-text">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
            <a href="#learn-more" className="learn-more-link">
              Learn More <span className="arrow">➔</span>
            </a>
          </Col>

          {/* Right Column - Two Cards */}
          <Col lg={6}>
            <Row>
              <Col md={6} className="mb-4">
                <Card className="info-card">
                  <Card.Body className="d-flex flex-column justify-content-star gap-2">
                    <div className="icon-box">
                      <img src={icon1} alt="Certified Teacher" className="icon" />
                    </div>
                    <Card.Title className="card-title">Certified Teacher</Card.Title>
                    <Card.Text className="card-text">
                      The gradual accumulation of information about
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="info-card">
                  <Card.Body className="d-flex flex-column justify-content-start gap-2">
                    <div className="icon-box">
                      <img src={icon2} alt="Expert Instruction" className="icon" />
                    </div>
                    <Card.Title className="card-title">Expert Instruction</Card.Title>
                    <Card.Text className="card-text">
                      The gradual accumulation of information about
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Packages;
