import React from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero_Section.css';
import image from "../assets/Screenshot (165).png";  // Ensure this path is correct

function Hero_Section() {
  return (
    <React.Fragment>
      {/* Navigation Bar */}
      <Navbar expand="lg" className="navbar-light custom-navbar">
        <div className="container">
          <Navbar.Brand href="#" className="brand-name">Brandname</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link href="#product" className="nav-link-custom">Product</Nav.Link>
              <Nav.Link href="#pricing" className="nav-link-custom">Pricing</Nav.Link>
              <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
              <Nav.Link href="#login" className="nav-link-custom login-link">Login</Nav.Link>
              <Button  className="btn btn-success join-us-btn">JOIN US</Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column - Text */}
            <div className="col-lg-6 text-center text-lg-left">
              <p className="text-success welcome-text">Welcome</p>
              <h1 style={{color:"#252B42", fontWeight:"600"}} className="display-4 font-weight-bold hero-heading">Best Learning Opportunities</h1>
              <p style={{color:"background: #737373"}} className="lead hero-subtext">Our goal is to make online education work for everyone</p>
              <div style={{display:"flex", gap:"10px", justifyContent:"center"}}>
                <a href="#join" className="btn btn-success mr-2">Join Us</a>
                <a href="#learn-more" className="btn btn-outline-success">Learn More</a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div  className="col-lg-6 mt-4 mt-lg-0  text-center">
              <div className="image-container">
                <img
                  src={image}
                  alt="Student holding books"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Hero_Section