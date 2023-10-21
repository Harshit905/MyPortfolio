import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{ padding: '30px' }}>
      <Row>
        <Col md={12} className="contact-social">
          {/* <div className='contact-text'>
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://github.com/19sajib"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://twitter.com/19sajib"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/19sajib/"
                target="_blank"
                rel="noreferrer"
                className="icon-color  contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.instagram.com/19sajib"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul> */}

          <div className="contact-container">
              <ul className="contacts">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  JE-29, Jhelum Ext, NIT Srinagar, Srinagar(190006)
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  harshit.2020bite048@nitsri.ac.in
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  9462331968
                </li>
                <li>
                  <i className="fa fa-whatsapp" aria-hidden="true"></i>
                  7275171968
                </li>
              </ul>
          </div>



        </Col>
      </Row>
    </Container>
  )
}

export default Social