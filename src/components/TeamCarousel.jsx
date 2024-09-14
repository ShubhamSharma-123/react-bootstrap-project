import member1 from "../assets/Screenshot (174).png"
import member2 from "../assets/Screenshot (175).png"
import member3 from "../assets/Screenshot (176).png"
import member4 from "../assets/Screenshot (177).png"
import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import "./TeamCarousel.css"
import '@fortawesome/fontawesome-free/css/all.min.css';


const teamMembers = [
  {
    name: "Julian Jameson",
    profession: "Profession",
    image: member1, // Replace with actual image URL
  },
  {
    name: "Julian Jameson",
    profession: "Profession",
    image: member2, // Replace with actual image URL
  },
  {
    name: "Julian Jameson",
    profession: "Profession",
    image: member3, // Replace with actual image URL
  },
  {
    name: "Julian Jameson",
    profession: "Profession",
    image: member4, // Replace with actual image URL
  },
];

function TeamCarousel() {
  return (
    <section className="team-section py-5">
      <Container>
        {/* Title Section */}
        <Row className="mb-5">
          <Col lg={12} >
            <h4 className="section-subtitle1">Team</h4>
            <h2 className="section-title1">Get Quality Education</h2>
            <p className="section-text">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </Col>
        </Row>

        {/* Carousel Section */}
        <Carousel indicators={false} interval={3000}>
          {teamMembers.map((member, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {teamMembers.map((member, index) => (
                  <Col md={3} key={index} className="d-flex justify-content-center">
                    <Card className="team-card text-center">
                      <Card.Img variant="top" src={member.image} />
                      <Card.Body className="text-center">
                        <Card.Title>{member.name}</Card.Title>
                        <Card.Text>{member.profession}</Card.Text>
                        <div className="social-icons">
                          <a href="#" className="icon-link">
                            <i className="fab fa-facebook"></i>
                          </a>
                          <a href="#" className="icon-link">
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a href="#" className="icon-link">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default TeamCarousel;

