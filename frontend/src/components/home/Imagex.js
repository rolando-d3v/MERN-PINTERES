import React from "react";
import {Link} from 'react-router-dom'
import { format} from 'timeago.js';
import { Card, Button } from "react-bootstrap";

function Imagex(props) {
  const { e_image } = props;

  //url del BACKEND
  let url = process.env.REACT_APP_BACKEND_URL;
  console.log(process.env.REACT_APP_BACKEND_URL);

  let xex = `${Math.round(e_image.size / 102400, 2)} MB`;

  return (
    <Card
      style={{ width: "17rem", margin: "0.5em" }}
      className=" animate__animated animate__fadeInDown"
    >
      <Card.Img variant="top" src={`${url}${e_image.path}`} />
      <Card.Body>
        <Card.Title> {e_image.title} </Card.Title>
        <Card.Text>{e_image.description}</Card.Text>
        <Card.Text>{format(e_image.createdAt)}</Card.Text>
        <Card.Text>{xex}</Card.Text>
        <Link to={`/image/${e_image._id}`} className="btn btn-info btn-block">
          Ver Mas
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Imagex;
