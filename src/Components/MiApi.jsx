import React, { useEffect, useState } from "react";
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from './Footer';
import {Form, FormControl, Row, Col,Card, Image, Button } from "react-bootstrap";
import Menu from './Menu';
import CloseButton from 'react-bootstrap/CloseButton';
const MiApi = () => {
  const [superHeroes, setSuperHeroes] = useState([]);
  const [comic, setComic] = useState("");
  const [imagen, setImagen] = useState("");
  const [name, setName] = useState("");

  const nuevoHeroe = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("http://localhost:3001/api/heroes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comic,
          imagen,
          name,
        }),
      });
      const response = await data.json();
      console.log(response);
      obtenerDatos();
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerDatos = async (parametro = "") => {
    try {
      const data = await fetch("http://localhost:3001/api/heroes/");     
      const response = await data.json();
      let superHeroes = response.data;
      if (parametro !== "") { 
        superHeroes = superHeroes.filter(superhero =>
          superhero.name.toLowerCase().includes(parametro.toLowerCase())
        );
      }
      superHeroes = superHeroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      setSuperHeroes(superHeroes);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = async event => {
    obtenerDatos(event.target.value)
  };
  useEffect(() => {
    obtenerDatos();
  }, []);

  const eliminarHeroes = async (id) => {
    try {
      console.log(id);
      const data = await fetch(`http://localhost:3001/api/heroes/${id}`, {
        method: "DELETE",
      });
      const response = await data.json();
      console.log(response);
      obtenerDatos();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
        <div className="Container bg-dark m-0">
        <Menu isLogin={false}/>
        <h1 className="text-bg-dark ps-5 pt-5 m-0 title">LOS MEJORES SUPERHEROES DE LA HISTORIA ESTÁN AQUÍ</h1>
        <div className=" d-flex justify-content-center mt-5 mb-5">
    <Image  src="https://raw.githubusercontent.com/zuki2610/renderizacion_react/main/public/assets/img/Logo1.png"/>
    </div>
    <Form inline className="mb-5 pe-5 me-5 d-flex justify-content-end vibrate-1">
    <FormControl className="color-change-5x" style={{ width: '12rem', height: '5vh'}}
      type="text"
      placeholder="Buscar superhéroe"
      onChange={handleSearch}
    />
    </Form>
      <div className= "contenedor">
        <Row className="m-0 row">
      {superHeroes.map(superhero => (
        <Col key={superhero.id} xs={12} md={6} lg={4}>
          <Card  style={{ width: '18rem', height: '54vh' }} className="mb-5 ms-5 flip-scale-up-ver card">
            <Card.Body className="bg-secondary text-light">
              <Image src={superhero.imagen} alt={superhero.name} variant="top" className="rounded mb-4 p-0" fluid style={{ width: '18rem', height: '34vh' }}/>
              <Card.Title>{superhero.name}</Card.Title>
              <Card.Text>{superhero.comic}</Card.Text>
              <CloseButton onClick={() => eliminarHeroes(superhero._id)}></CloseButton>   
            </Card.Body>
          </Card>
        </Col>
      ))}
         </Row>
      <h3 className="text-light d-flex justify-content-center">¿Falta un Heroe? ¡Agrégalo aqui!</h3>
      <Form onSubmit={nuevoHeroe}>
        <div className="label">
          <div className="order">
            <Form.Label htmlFor="name">Nombre</Form.Label>
            <Form.Control
              type="text"
              id="name"
              aria-describedby="Text"
              onChange={(e) => setName(e.target.value)}
            />    
            <Form.Text id="Text" muted>
              Escribe el nombre del super heroe que vas a agregar
            </Form.Text>
          </div>
          <div className="order">
            <Form.Label htmlFor="comic">Comic en el que apareció por primera vez este heroe</Form.Label>
            <Form.Control
              type="text"
              id="comic"
              aria-describedby="Text"
              onChange={(e) => setComic(e.target.value)}
            />
            <Form.Text id="Text" muted>
              Escribe aqui el primer comic en el que apareció este heroe
            </Form.Text>
          </div>
          <div className="order">
            <Form.Label htmlFor="imagen">Ingresa la mejor foto del heroe aquí</Form.Label>
            <Form.Control
              type="URL"
              id="imagen"
              aria-describedby="URL"
              onChange={(e) => setImagen(e.target.value)}
            />
            <Form.Text id="Text" muted>
              Ingresa la URL de la imagen
            </Form.Text>
          </div> 
        </div>
        <Button variant="secondary" type="submit" className="button1">
              {" "}
              Agregar{" "}
            </Button>
      </Form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MiApi;
