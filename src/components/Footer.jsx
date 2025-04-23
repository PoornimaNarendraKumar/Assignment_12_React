import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container className="text-center">
        <p className="mb-2">
          <strong>Email:</strong> johndoe1234@gmail.com
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> +91 98765 43210
        </p>
        <p className="mb-0 mt-3">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
