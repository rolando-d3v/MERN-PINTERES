import React from "react";
import { format} from 'timeago.js';
import { Card, Button } from "react-bootstrap";

function Imagex(props) {
  const { e_image } = props;

  //url del BACKEND
  let url = process.env.REACT_APP_BACKEND_URL;
  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <Card style={{ width: "17rem", margin: "0.5em" }} >
      <Card.Img variant="top" src={`${url}${e_image.path}`} />
      <Card.Body>
        <Card.Title> {e_image.title} </Card.Title>
        <Card.Text>{e_image.description}</Card.Text>
        <Card.Text>{format(e_image.create_at)}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Imagex;
