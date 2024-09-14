import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './FooterBottom.css'

const FooterBottom = () => {
  return (
    <footer className="footer-bottom py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} xs={12} className="text-center text-md-left mb-3 mb-md-0">
            <p className="mb-0">Made With Love By Figmaland All Right Reserved</p>
          </Col>
          <Col md={6} xs={12} className="text-center text-md-right">
            <a href="#" className="footer-icon mx-2">
              <FaFacebookF />
            </a>
            <a href="#" className="footer-icon mx-2">
              <FaInstagram />
            </a>
            <a href="#" className="footer-icon mx-2">
              <FaTwitter />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterBottom;
