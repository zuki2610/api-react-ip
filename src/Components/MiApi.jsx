import React, { useEffect, useState } from "react";
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import {Form, FormControl, Container, Row, Col,Card, Image } from "react-bootstrap";
const MiApi = () => {
  const [superHeroes, setSuperHeroes] = useState([]);

  const obtenerDatos = async (parametro="") => {
    try {
      const data = await fetch("/db/marvel.json");     
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
      <Container>
        <Menu/>
        <Header titulo="Personajes de Marvel y Comics"/>
        <Form inline className="mb-3">
        <FormControl
          type="text"
          placeholder="Buscar superhéroe"
          onChange={handleSearch}
        />
      </Form>
        <Row>
      {superHeroes.map(superhero => (
        <Col key={superhero.id} xs={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Image src={superhero.imagen} alt={superhero.name} fluid />
              <Card.Title>{superhero.name}</Card.Title>
              <Card.Text>{superhero.comic}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        <Footer/>
      </Container>
    </>
  );
};

export default MiApi;
