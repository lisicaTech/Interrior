import React, { useState } from "react";
import Custom from "./custom";
import Ready from "./ready";
import "../bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

function Design() {
  const [idisplay, setDisplay] = useState("none");
  const [idis, setDistwo] = useState("inherit");
  function mydisp() {
    setDisplay("inherit");
    setDistwo("none");
  }
  function mydistwo() {
    setDisplay("none");
    setDistwo("inherit");
  }
  return (
    <>
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link onClick={mydistwo}>
                <h5>Custom Design</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={mydisp}>
                <h5>Ready Design</h5>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <div style={{ display: idisplay }}>
            <Ready></Ready>
          </div>
          <div style={{ display: idis }}>
            <Custom></Custom>
          </div>
        </Card.Body>
      </Card>
      
    </>
  );
}

export default Design;
