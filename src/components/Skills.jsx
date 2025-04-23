import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './skills.css'; 

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={6}>
            <div className="text-center">
              <h2 className="text-primary fw-bold mb-4">Skills & Technologies</h2>
              <p className="lead text-muted">
                I have expertise in a variety of modern technologies and practices that I continuously enhance to create scalable solutions.
              </p>
            </div>
          </Col>
        </Row>

       
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="skills-list">
              <ul className="list-unstyled">
                <li className="skill-item">
                  <i className="bi bi-check-circle me-2 text-success"></i>
                  <span className="skill-name">Full-stack Development</span>
                </li>
                <li className="skill-item">
                  <i className="bi bi-check-circle me-2 text-success"></i>
                  <span className="skill-name">JavaScript (React, Node.js, Express)</span>
                </li>
                <li className="skill-item">
                  <i className="bi bi-check-circle me-2 text-success"></i>
                  <span className="skill-name">Database Management (MongoDB, SQL)</span>
                </li>
                <li className="skill-item">
                  <i className="bi bi-check-circle me-2 text-success"></i>
                  <span className="skill-name">Artificial Intelligence & Machine Learning</span>
                </li>
                <li className="skill-item">
                  <i className="bi bi-check-circle me-2 text-success"></i>
                  <span className="skill-name">Git & Version Control</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
