import React from 'react'
import { Container, Row, Col, Card, CardBody,Button } from "shards-react";
import { Route, Link} from "react-router-dom";
import "./Notes.css";

export default function Notes() {
    return (
        <Route>
        <Container className="dr-example-container">
        <h4>Choose the subject to view notes</h4>
        <hr />
        <br />
            <Row>
                <Col sm="6" lg="3" xs="12">
                    <Card style={{margin:"0.5rem"}}>
                        <CardBody>
                            <h5>Cloud Computing ( CC )</h5>
                            <Link to="/find/CC">
                                <Button theme="light">View</Button>
                            </Link>
      </CardBody>
                    </Card>
                </Col>
                <Col sm="6" lg="3" xs="12">
                    <Card style={{margin:"0.5rem"}}>
                        <CardBody>
                            <h5>Supply Chain Management ( SCM )</h5>
                            <Link to="/find/SCM">
                                <Button theme="light">View</Button>
                            </Link>
      </CardBody>
                    </Card>
                </Col>
                <Col sm="6" lg="3" xs="12" >
                    <Card style={{margin:"0.5rem"}} >
                        <CardBody>
                            <h5>Software Project Management ( SPM )</h5>
                            <Link to="/find/SPM">
                                <Button theme="light">View</Button>
                            </Link>
      </CardBody>
                    </Card>
                </Col>
                <Col sm="6" lg="3" xs="12">
                    <Card style={{margin:"0.5rem"}}>
                        <CardBody>
                           <h5> Human Computer Interaction ( HCI )</h5>
                            <Link to="/find/HCI">
                                <Button size="sm" theme="light">View</Button>
                            </Link>
      </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>
        </Route>
    )
}
