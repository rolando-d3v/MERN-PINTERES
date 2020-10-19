import React from "react";
import { Card, Button } from "react-bootstrap";

function Imagex(props) {

    const {e_image} = props

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`http://localhost:4000${e_image.path}`} />  
      <Card.Body>
        <Card.Title> {e_image.title} </Card.Title>
        <Card.Text>
        {e_image.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Imagex;
