import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-danger mb-4">About Me 👨‍💻</h2>
        
    
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={4} className="text-center">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.bLnnDC8ZDmyikEiSD9HhYwHaHa&pid=Api&P=0&h=180" 
              alt="John Doe"
              className="img-fluid rounded-circle shadow-lg" 
              style={{ maxWidth: '200px' }}
            />
          </Col>
        </Row>
        

        <p className="text-center text-muted">
  Hello! I'm <span className="fw-bold">John Doe</span>, a passionate and driven Software Engineer with a deep love for problem-solving and coding. 
  I specialize in full-stack development, building scalable web applications, and designing solutions that solve real-world problems.
</p>
<p className="text-center text-muted">
  In my free time, I enjoy exploring new technologies, learning about artificial intelligence, and contributing to open-source projects. I am passionate about clean code, efficient systems, and creating seamless user experiences. 
  I’m always seeking opportunities to grow and collaborate with other like-minded professionals in the tech community.
</p>
</Container>
</section>
     )  
};

export default AboutMe;
