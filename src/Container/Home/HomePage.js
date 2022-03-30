import {Routes, Route, BrowserRouter} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import './HomePage.css';

import Me from '../../Photos/photoofme/NewMePhoto.png';
import Java from '../../Photos/Languages/Java.png';
import ASP from '../../Photos/Languages/ASPNet.png';
import JS from '../../Photos/Languages/JavaScript.png';
import TS from '../../Photos/Languages/TypeScript.png';
import React from '../../Photos/Languages/React.png';
import AWS from '../../Photos/Tools/aws.png';
import AZ from '../../Photos/Tools/Azure.png';
import IJ from '../../Photos/Tools/IntelliJ.png';
import MacOS from '../../Photos/Tools/MacOS.png';
import Term from '../../Photos/Tools/Terminal.png';
import VS from '../../Photos/Tools/VisualStudio.png';
import VSC from '../../Photos/Tools/VSCode.png';
import Win from '../../Photos/Tools/Windows.png';


function Home() {
  return (
    <Container>
    <Container className="Intro">
      <Row>
        <Col md lg sm className="imagecent"><img src={Me} width="302.4" height="403.2"/></Col>
        <Col md lg sm className="restrict">
          <div id="NameHead"><b>Craig S. Canepa Jr.</b></div> 
          <div id="majorcontacthead"><b>Information Technology Major · CSC@craigcanepa.com · (504)-655-3982</b></div>
          <div id="aboutmehead">About Me</div>
          <div id="aboutmebody">I am a software developer who excels in front end development and can quickly put together a react front end. Even though I excel in the front end, I can pick up any part of a project that is needed. My skills do not just stop at programming; I am also a great Mario Kart player, and I can make a mean hamburger and pizza. </div>
        </Col>
      </Row>
      </Container>
      <Row>
        <Col md lg sm ><div id="eduhead">Education</div></Col>
      </Row>
      <Row>
        <Col md lg sm >
          <div id="edubody">I am attending Southeastern Louisiana University (SLU) in Hammond, LA and am expecting to graduate in the Spring of 2022 with a Bachelors of Science in Information Technology. My current major GPA is ~3.4, while my overall GPA is ~3.3.</div>
        </Col>
      </Row>
      <Row>
        <Col md lg sm ><div id="LLhead">Languages and Libraries</div></Col>
      </Row>
      <Row>
        <Col md lg sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={Java} width="20" height="110"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwords">Java</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md lg sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={JS} width="20" height="110"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwords">JavaScript</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md lg sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img width="280" height="110" src={TS}/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwords">TypeScript</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md lg={4} sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={React} width="0" height="110"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwords">React</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md lg={4} sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={ASP} height="110"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwords">ASP.Net</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md lg sm ><div id="LLhead">Tools</div></Col>
      </Row>
      <Row>
        <Col md lg sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={VSC} width="20" height="110"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwordslg">VS Code</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md lg sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={VS} width="20" height="110"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwordslg">Visual Studio</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md lg sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={IJ} width="20" height="110"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwords">IntelliJ</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md lg sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={AWS} width="20" height="110"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwords">AWS</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md lg sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={AZ} width="20" height="110"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwords">Azure</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md lg sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={Term} width="20" height="110"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwordslg">Unix Terminal</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md lg={4} sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={MacOS} width="20" height="110"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwords">MacOS</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md lg={4} sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={Win} width="20" height="110"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwords">Windows</div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <Col md lg sm >
          <Card id="cards">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img variant="bottom" src={} width="20" height="130"/>
                </Col>
                <Col id="testy">
                  <Card.Text>
                    <div id="cardwords"><b></b></div>
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col> */}
    </Container>
  );
}

export default Home;