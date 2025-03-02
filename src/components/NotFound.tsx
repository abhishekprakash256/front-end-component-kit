import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css"; // Custom CSS
import "../styles/NotFound.css"; // Custom CSS

const NotFound: React.FC = () => {
  return (
    <Container className="m-0 p-0 text-center">
      <Row className="rounded background-color-body font-color-class mt-3 m-0">
        <Col className="text-center p-2 mt-3 mb-3">
          <h1 className="not-found-title m-2">
            OOPS! SEARCH
            <br />
            Results Not Found
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;

