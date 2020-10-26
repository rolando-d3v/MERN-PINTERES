import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { Card, Button } from "react-bootstrap";
import clienteAxios from "../../config/clienteAxios";
import Swal from 'sweetalert2'

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


  //ELIMINA IMAGEN DEL TOTAL
  const eliminarImage = async (id) => {
    try {
      Swal.fire({
        title: 'Esta seguro?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',

         //personaliza sweetalert2
        customClass: {
      popup: "popup-classx",
      actions: 'actions-class',
      confirmButton: 'confirm-button-class',
      cancelButton: 'cancel-button-class',
    }
    
      }).then( async (result) => {
        if (result.value) {
         const ref = await clienteAxios.delete(`/image/${id}`);
         if(ref.status === 200) {
          Swal.fire(
            'Deleted!',
            ref.data.message,
            'success'
          )
          
         }
        }
      })
    } catch (error) {
      console.log(error);
    }
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
