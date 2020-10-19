import React, { useState, useEffect } from "react";
import clienteAxios from "../../config/clienteAxios";
import Imagex from "./Imagex";

function Home() {
  const [dataImage, setDataImage] = useState([]);

  const obtenerImage = async () => {
    const images = await clienteAxios.get("/upload");
    setDataImage(images.data);
    console.log(images.data);
  };

  useEffect(() => {
    obtenerImage();
  }, []);

  return (
    <div className="mt-4">
        <h4 className="text-center">Galeria de fotos 2020</h4>
      <div className='row' >
        {dataImage.map((e_image) => (
          <Imagex e_image={e_image} key={e_image._id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
