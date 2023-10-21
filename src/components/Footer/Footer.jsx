import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/sLogo.jpeg";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="5" className="footer-copywright">
          <span>Committed to crafting meaningful and effective solutions!</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright © {year} </span>
          &nbsp;<span> Harshit</span>

        </Col>
        <Col md="3" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                className="icons-footer"
                href="https://github.com/Harshit905"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="icons-footer"
                href="https://twitter.com/harshitd891"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="icons-footer"
                href="https://www.linkedin.com/in/harshit-dubey-686871202/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="icons-footer"
                href="https://www.instagram.com/harshit.dubey_/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer