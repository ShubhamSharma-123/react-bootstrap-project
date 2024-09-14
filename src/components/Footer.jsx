import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <Container>
        <Row>
          <Col md={2} xs={6} className="mb-4">
            <h6 className="footer-title">Company Info</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </Col>

          <Col md={2} xs={6} className="mb-4">
            <h6 className="footer-title">Legal</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </Col>

          <Col md={2} xs={6} className="mb-4">
            <h6 className="footer-title">Features</h6>
            <ul className="list-unstyled">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </Col>

          <Col md={2} xs={6} className="mb-4">
            <h6 className="footer-title">Resources</h6>
            <ul className="list-unstyled">
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </Col>

          <Col md={4} xs={12} className="mb-4">
            <h6 className="footer-title">Get In Touch</h6>
            <ul className="list-unstyled contact-info">
              <li>
                <FaPhone className="me-2" />
                (480) 555-0103
              </li>
              <li>
                <FaMapMarkerAlt className="me-2" />
                4517 Washington Ave. Manchester, Kentucky 39495
              </li>
              <li>
                <FaEnvelope className="me-2" />
                debra.holt@example.com
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
