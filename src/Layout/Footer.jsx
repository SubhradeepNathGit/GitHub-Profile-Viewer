import React from 'react';
import { Container } from 'react-bootstrap';



const Footer = () => {
  return (
    <footer className="bg-secondary py-3 border-top ">
      <Container className="text-center">
        <small className="text-white">
          © {new Date().getFullYear()} GitHub Profile Viewer. All rights reserved to {' '}
          <a
            href="https://github.com/SubhradeepNathGit"
            target="_blank"
            rel="noopener noreferrer"
            className="fw-bold text-primary text-decoration-none"
          >
            Subhradeep Nath
          </a>
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
