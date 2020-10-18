import React, {useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import clienteAxios from '../../config/clienteAxios';

function Formulario() {
    const [data, setData] = useState({
        description: '',
        title: ''
    })
    const [archivo, setArchivo] = useState('')

    const {description, title} = data

    const obtenerData = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    };

   const leerArchivo = (e) => {
    setArchivo(e.target.files[0]);
  };

    const subirData = async (e) => {
        e.preventDefault();
    
        // formdata para subir archivos y string y number
        const formData = new FormData()
        // formData.append('nombre', dataProducto.nombre)
        formData.append('description', data.descripcion)
        formData.append('image', archivo)
    
        try {
            const res = await clienteAxios.post("/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res);
            Swal.fire({
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500
              })
        } catch (error) {
            console.log(error);
        }
      };


  return (
    <div className="mt-5">
      <Form onSubmit={subirData}>
        <Form.Group>
          <Form.Label>title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            onChange={obtenerData}
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
            name="descripcion"
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
