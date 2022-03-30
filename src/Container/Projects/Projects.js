import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from '@mui/material/Button';
import './Projects.css';

function MyVerticallyCenteredModalP1(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Dr. Fischer DDS Website
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Discription:</h4>
          <p>
          A dentist was relocating his practice from the New Orleans area to the Pass Christian Mississippi area. Due to this move, he required a simple website to advertise services offered by them, how to contact them, and where they were located.
          </p>
          <h4>Technologies Used:</h4>
          <p>
            HTML, Bootstrap 5, Google Maps API, AWS S3 Bucket, and AWS CloudFront.
          </p>
          <h4>Link to Website:</h4>
          <p>
          <Button sx={{bgcolor: "blue"}} variant="contained" href="https://drfischerdds.com">Dr Fischer DDS</Button>
          </p>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  function MyVerticallyCenteredModalP2(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            411 Internship Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h4>Discription:</h4>
          <p>
          Dr. John Burris wanted to digitize the CMPS 400 internship forms and allow students and their employer to fill out the forms over the course of the semester. The project would also lessen the paper clutter and waste the physical forms created, as well as making sure the form we were tasked with kept accessibility front and center.
          </p>
          <h4>Technologies Used:</h4>
          <p>
            React, React-Bootstrap, AWS Amplify, AWS CognitoPool, AWS AppSync, and AWS Dynamodb.
          </p>
          <h4>Link to Website:</h4>
          <p>
          <Button sx={{bgcolor: "blue"}} variant="contained" href="https://sluintern.com">Intern Form</Button>
          </p>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  function MyVerticallyCenteredModalP3(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            My Website
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h4>Discription:</h4>
          <p>
            A modern update of my personal website, to reflect the technologies I am familiar and highly knowledgeable with.
          </p>
          <h4>Technologies Used:</h4>
          <p>
            React, React-Bootstrap, Material UI, AWS Amplify.
          </p>
          <h4>Link to Website:</h4>
          <p>
          <Button sx={{bgcolor: "blue"}} variant="contained" href="https://craigcanepa.com">My Website</Button>
          </p>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

export  default function Navb() {
    const [modalShowP1, setModalShowP1] = React.useState(false);
    const [modalShowP2, setModalShowP2] = React.useState(false);
    const [modalShowP3, setModalShowP3] = React.useState(false);

    return (
        <>
        <Row> 
            <Col> <div id="Projhead">Projects</div></Col>
        </Row>
        <Row>
            <Col md lg sm ><Button id="breaky" sx={{bgcolor: "blue", width: 200, height: 52}} variant="contained" onClick={() => setModalShowP1(true)}>Dr Fischer</Button></Col>
            <Col md lg sm ><Button id="breaky" sx={{bgcolor: "blue", width: 200, height: 52}} variant="contained" onClick={() => setModalShowP2(true)}>Capstone Intern Form</Button></Col>
            <Col md lg sm ><Button id="breaky" sx={{bgcolor: "blue", width: 200, height: 52}} variant="contained" onClick={() => setModalShowP3(true)}>My Website</Button></Col>
        </Row>
        <MyVerticallyCenteredModalP1
        show={modalShowP1}
        onHide={() => setModalShowP1(false)}
        />
        <MyVerticallyCenteredModalP2
        show={modalShowP2}
        onHide={() => setModalShowP2(false)}
        />
        <MyVerticallyCenteredModalP3
        show={modalShowP3}
        onHide={() => setModalShowP3(false)}
        />
        </>
    );
}
