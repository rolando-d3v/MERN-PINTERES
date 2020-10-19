import React, {useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import clienteAxios from '../../config/clienteAxios';

function Formulario() {
    const [data, setData] = useState({
      description: "",
      title: "",
    });
    const [archivo, setArchivo] = useState("");

    const { description, title } = data;

     //leer state de los datos
    const obtenerData = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    };
    //leer state del archivo para subirlo
    const leerArchivo = (e) => {
      setArchivo(e.target.files[0]);
    };

    const subirData = async (e) => {
      e.preventDefault();

      if (archivo.size > 2000000) {
        Swal.fire({
          icon: "warning",
          title: "Tamaño Maximo 2MB",
          showConfirmButton: true,
          timer: 3500,
        });
      }

      // formdata para subir archivos y string y number
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", archivo);

      try {
        const res = await clienteAxios.post("/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res);
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
      }
    };


  return (
    <div className="mt-5">
      <Form onSubmit={subirData}>
        <Form.Group>
          <Form.Label >title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            onChange={obtenerData}
            name='title'
            value={title}
          />
        </Form.Group>

        <Form.Group controlId="upload">
          <Form.Label>subir Image</Form.Label>
          <Form.Control type="file" name="image" onChange={leerArchivo} />
        </Form.Group>

        <Form.Group>
          <Form.Label>description</Form.Label>
          <textarea
            name="description"
            rows="4"
            className="form-control"
            onChange={obtenerData}
            value={description}
          ></textarea>
        </Form.Group>

        <Button variant="primary" type="submit">
          upload
        </Button>
      </Form>
    </div>
  );
}

export default Formulario;
