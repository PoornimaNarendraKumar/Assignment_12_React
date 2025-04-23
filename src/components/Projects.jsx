import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: "🌐 Portfolio Website",
    description: "A responsive and interactive portfolio to showcase my work and skills.",
    techStack: "React, Bootstrap, Vite",
    githubLink: "https://github.com/your-username/portfolio"
  },
  {
    title: "📝 Blog Platform",
    description: "A full-stack blog application with authentication and CRUD features.",
    techStack: "Node.js, Express, MongoDB, EJS",
    githubLink: "https://github.com/your-username/blog-platform"
  },
  {
    title: "📊 Dashboard Analytics",
    description: "An interactive admin dashboard for monitoring user behavior and analytics.",
    techStack: "React, Chart.js, Bootstrap",
    githubLink: "https://github.com/your-username/dashboard-analytics"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-primary fw-bold mb-5">💼 My Projects</h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0 project-card">
                <Card.Body>
                  <Card.Title className="text-dark fw-semibold">{project.title}</Card.Title>
                  <Card.Text className="text-muted">{project.description}</Card.Text>
                  <Card.Text>
                    <strong>Tech Stack:</strong> <span className="text-info">{project.techStack}</span>
                  </Card.Text>
                  <div className="text-center mt-3">
                    <Button variant="dark" href={project.githubLink} target="_blank">
                      <i className="bi bi-github me-2"></i>View on GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
