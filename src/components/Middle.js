import React, { useState } from 'react'
import {
    Container, Row, Col, Button,
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    Modal, ModalBody, ModalHeader,
} from "shards-react";
import image from "../images/notes.png";
import image1 from "../images/quiz.png";
import santhosh from "../images/santhosh.jpg"

function Middle() {
    const [open, setOpen] = useState(false);
    return (
        <Container className="dr-example-container">
            <div className="header">
                <h3>This website is built for the benefit of the students who are actively attending the online classes.</h3>
                <br />
                <h4>It tries to provide solution for the problems faced by them such as...........</h4>
            </div>
            <br />
            <br />
            <Row className="row">
                <Col sm="12" lg="6">
                    <img src={image} className="image" alt="notes" />
                </Col>
                <Col sm="12" lg="6" className="col2">
                    <h3>Notes</h3>
                    <br />
                    <hr />
                    <br />

                    <h4>1)In this sites you can get notes shared by the staff.</h4>
                    <h4>2)It will be updated periodically.</h4>
                    <h4>3)The daily summary of the class will be updated here.</h4>
                </Col>
            </Row>
            <Row>
                <Col sm="12" lg="6" className="col2">

                    <h3>Quiz</h3>
                    <br />
                    <hr />
                    <br />
                    <h4>1)You can attend daily quizzes here for different subjects.</h4>
                    <h4>2)Report will be generated on a daily basis.</h4>
                    <h4>3)Your progress is tracked.</h4>
                </Col>
                <Col sm="12" lg="6">
                    <img src={image1} className="image" alt="notes" />
                </Col>
            </Row>
            <br />
            <br />
            <br />
            <div className="know">
                <p style={{ display: "inline" }}>To find entire details of the development &nbsp; &nbsp;</p><Button onClick={() => setOpen(!open)} theme="info">Know more </Button>

            </div>
            <div className="footer">
                <h4>Version 1.0.0</h4>
                <br />
                <Container style={{ textAlign: "center",margin:"1rem" }}>
                    <Card style={{ maxWidth: "300px" }}>
                        <CardHeader>About Developer</CardHeader>
                        <CardImg src={santhosh} />
                        <CardBody>
                            <CardTitle>Santhosh Kumar Rajendran</CardTitle>
                            <p>Full Stack developer</p>
                            <Button><a style={{ textDecoration: "none", color: "#ffffff" }} href="https://www.linkedin.com/in/santhosh-kumar-150265188" rel="noopener noreferrer" target="_blank">LinkedIn &rarr;</a></Button>
                        </CardBody>
                    </Card>
                </Container>
            </div>
            <Modal open={open} toggle={() => setOpen(!open)}>
                <ModalHeader>Details of the App</ModalHeader>
                <ModalBody>The work is still in progress, will be updated soon.</ModalBody>
            </Modal>
        </Container>
    )
}

export default Middle
