// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import './NewsletterForm.css'; // Custom CSS if needed for additional styling

// function NewsletterForm() {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');

//   // Email validation function
//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address.');
//     } else {
//       setError('');
//       alert('Subscription successful!');
//       // Add form submission logic here (e.g., API call)
//     }
//   };

//   return (
//     <section className="newsletter-section py-5">
//       <Container>
//         <Row className="text-center mb-4">
//           <Col>
//             <h6 className="text-success">Newsletter</h6>
//             <h2>Watch our Courses</h2>
//             <p>
//               Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
//             </p>
//           </Col>
//         </Row>

//         <Row className="justify-content-center">
//           <Col lg={6} md={8}>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formEmail">
//                 <Form.Control
//                   type="email"
//                   placeholder="Your Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   isInvalid={!!error} // Shows error state if there is an error
//                 />
//                 {error && (
//                   <Form.Text className="text-danger">
//                     {error}
//                   </Form.Text>
//                 )}
//               </Form.Group>
//               <Button variant="success" type="submit" className="mt-3 w-100">
//                 Subscribe
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default NewsletterForm;

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './NewsletterForm.css'; // Custom CSS if needed for additional styling

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      alert('Subscription successful!');
      // Form submission logic (if any)
    }
  };

  return (
    <section style={{paddingBlock:"120px"}} className="newsletter-section">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h6 className="text-success">Newsletter</h6>
            <h2>Watch our Courses</h2>
            <p>
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Form onSubmit={handleSubmit} className="d-flex">
              <Form.Group className="flex-grow-1">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!!error}
                  className="newsletter-input" // Custom class for styling
                />
                {error && (
                  <Form.Text className="text-danger">
                    {error}
                  </Form.Text>
                )}
              </Form.Group>
              <Button variant="success" type="submit" className="subscribe-button">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NewsletterForm;

