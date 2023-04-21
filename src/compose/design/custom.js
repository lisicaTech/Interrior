import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../bootstrap.min.css";
function Custom() {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
            Room interior
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Bedroom</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Dining Room</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-sm">Moduler Kitchen</div>
        <div className="col-sm">Washroom</div>
        <div className="col-sm">Cilling</div>
        <div className="col-sm">Furniture</div>
      </div>
    </div>
  );
}

export default Custom;
