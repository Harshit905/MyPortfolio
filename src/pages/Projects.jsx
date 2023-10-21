import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
// import Particle from "../components/Particle";
import pg from "../assets/projects/blogwebsite.png";
import notecanvas from "../assets/projects/notecanvas.png";
import weatherapp from "../assets/projects/weatherapp.png";
import ITDeptWebsite from "../assets/projects/ITDeptWebsite.png";
// import krypto from "../assets/projects/krypto.png";
// import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Social Media"
              description="This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD activities. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. Users can only view posts from their followed users and can only engage in chat with those they follow. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            /> 
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notecanvas}
              isBlog={false}
              title="NoteCanvas Web App"
              description="Developed a full-stack web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack, enabling users to create, read, update, and delete (CRUD) notes while managing their user accounts. Implemented user authentication and authorization features, ensuring data security and user privacy. Utilized RESTful APIs and modern frontend libraries to provide a seamless and responsive user experience."
              ghLink="https://github.com/Harshit905/NoteCanvas-Web-App"
              // demoLink="https://weatherapp-nitsri.netlify.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ITDeptWebsite}
              isBlog={false}
              title="Information Technology Department Website of National Institute of Technology, Srinagar"
              description="Developed the NIT Srinagar IT Dept. Website using ReactJS and server-side database for dynamic, responsive design. Stay updated with announcements, explore faculty profiles, access course info, and find resources. Discover research, connect with alumni, and contact us easily. It leverages interactive elements, including contact forms and a powerful search feature, to enhance the user experience."
              ghLink="https://github.com/Harshit905/dynamicWeatherApp"
              demoLink="http://it.nitsri.ac.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React and styled-components for a seamless experience. Built on the MERN stack, MyBlogHub offers a seamless and intuitive platform for bloggers to create accounts, craft their own blogs, and showcase their work. Whether you're a seasoned writer or just starting your blogging journey, MyBlogHub provides the tools you need to bring your stories to life. "
              ghLink="hhttps://github.com/Harshit905/Blog-Web-App-MERN"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Dynamic Weather App"
              description="I developed a Dynamic Weather App using HTML, CSS, JavaScript, and a weather API. It delivers real-time weather data and dynamically adjusts background images to match the current weather conditions. Users can access detailed weather information, multi-day forecasts, and utilize unit conversion. The app's responsive design ensures compatibility across devices. Robust error handling provides a seamless experience, even during unexpected situations."
              ghLink="https://github.com/Harshit905/dynamicWeatherApp"
              demoLink="https://weatherapp-nitsri.netlify.app/"
            />
          </Col>
          

        </Row>
      </Container>
    </Container>
  )
}

export default Projects