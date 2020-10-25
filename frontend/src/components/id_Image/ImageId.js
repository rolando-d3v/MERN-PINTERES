import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { Card, Button } from "react-bootstrap";
import clienteAxios from "../../config/clienteAxios";

function ImageId(props) {
  const idx = props.match.params.idImage;
  console.log(idx);

  const [imageId, setImageId] = useState({});
  console.log(imageId);

  const obtenerImage = async () => {
    const res = await clienteAxios.get(`/image/${idx}`);
    setImageId(res.data.image);
    // console.log(res.data);
  };

  useEffect(() => {
    obtenerImage();
  }, []);

  let url = process.env.REACT_APP_BACKEND_URL;

  const eliminarImage = async (id) => {
    const deletex = await clienteAxios.delete(`/image/${id}/delete`)
    console.log(deletex)
  };

  return (
    <div>
      <h3 className="m-4">Image Profile</h3>
      <Card
        style={{ width: "20rem", margin: "0.5em" }}
        className=" animate__animated animate__fadeInDown"
      >
        <Card.Img variant="top" src={`${url}${imageId.path}`} />
        <Card.Body>
          <Card.Title> {imageId.title} </Card.Title>
          <Card.Text>{imageId.description}</Card.Text>
          <Card.Text>{format(imageId.createdAt)}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              variant="danger"
              className="btn-block"
              onClick={() => eliminarImage(imageId._id)}
            >
              Eliminar imagen
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImageId;
