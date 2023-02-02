import React, { useEffect, useState } from "react";
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from './Footer';
import {Form, FormControl, Row, Col,Card, Image } from "react-bootstrap";
import Menu from './Menu';
const MiApi = () => {
  const [superHeroes, setSuperHeroes] = useState([]);

  const obtenerDatos = async (parametro="") => {
    try {
      const data = await fetch("https://raw.githubusercontent.com/zuki2610/api-react-ip/c86d072c9eabc9b5a2b13a117ab5e25cdf0bc672/public/db/marvel.json");     
      let superHeroes = await data.json();
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
      <div className= "d-flex justify-content-center mt-5 mb-5">
        <Row className="m-0 row">
      {superHeroes.map(superhero => (
        <Col key={superhero.id} xs={12} md={6} lg={4}>
          <Card  style={{ width: '18rem', height: '54vh' }} className="mb-5 ms-5 flip-scale-up-ver card">
            <Card.Body className="bg-secondary text-light">
              <Image src={superhero.imagen} alt={superhero.name} variant="top" className="rounded mb-4 p-0" fluid style={{ width: '18rem', height: '34vh' }}/>
              <Card.Title>{superhero.name}</Card.Title>
              <Card.Text>{superhero.comic}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
        <Footer/>
        </div>
    </>
  );
};

export default MiApi;
