import React from "react";
import Accordion from 'react-bootstrap/Accordion'
export default class AccordionComponent extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Useful Tips</Accordion.Header>
          <Accordion.Body>
          Bring water, and avoid the heat during summer!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  }
}
  



