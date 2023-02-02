import React from "react";
import "../index.css";
import Header from "./Header";
import Cards from "./Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Menu from "./Menu";
import Footer from "./Footer";


const Productos = () => {
  const contenido = [
    {
      id: "1",
      nombre: "Escudo Capitan America",
      imagen: "https://zuki2610.github.io/renderizacion_react/assets/img/escudo.png",
      url: "https://simple.ripley.cl/figura-de-accion-escudo-falcon-capitan-america-legends-series-mpm00066126514?s=mdco",
      contenido:
        "Forjado con una aleacion de Adamantium y Vibranium. Creado por Howard Stark.",
    },
    {
      id: "2",
      nombre: "Guantelete de Tony Stark",
      imagen: "https://zuki2610.github.io/renderizacion_react/assets/img/guantetony.png",
      url: "https://simple.ripley.cl/guante-electronico-hasbro-marvel-ironman-2000385310044p?color_80=rojo&s=mdco",
      contenido:
        "Creado por Tony Stark fue diseñado para portar las gemas del infinito, para proteger el universo.",
    },
    {
      id: "3",
      nombre: "Casco de Ironman",
      imagen: "https://zuki2610.github.io/renderizacion_react/assets/img/helmet.png",
      url: "https://simple.ripley.cl/casco-iron-man-avengers-mpm00006358710?s=mdco",
      contenido:
        "Diseñado por el mismo Tony Stark para protegerlo, incluye luces y sonidos.",
    },
    {
      id: "4",
      nombre: "Funko Loki",
      imagen: "https://zuki2610.github.io/renderizacion_react/assets/img/loki.png",
      url: "https://simple.ripley.cl/pop-loki-pop-6-mpm00060171410?s=mdco",
      contenido:
        "Loki Principe de Asgard, hijo de Odin, legítimo rey de Jotunheim, Dios de las mentiras y el engaño.",
    },
  ];
  const contenido2 = [
    {
      id: "5",
      nombre: "Guantelete de Thanos",
      imagen: "https://zuki2610.github.io/renderizacion_react/assets/img/thanos.png",
      url: "https://simple.ripley.cl/juguete-avengers-infinity-gaunlet-2000368076516p?s=mdco",
      contenido:
        "Creado por Eitri, enano de Nidavellir, es una de las armas más poderosas del universo Marvel.",
    },
    {
      id: "6",
      nombre: "Teseracto",
      imagen: "https://zuki2610.github.io/renderizacion_react/assets/img/tesseract.png",
      url: "https://simple.ripley.cl/accesorio-electronico-fan-marvel-legends-series-tesseract-loki-mpm00084163278?color_80=blanco&s=mdco",
      contenido:
        "Es un cubo que contiene la Gema del Espacio, uno de sus poderes es abrir portales interdimensionales.",
    },
    {
      id: "7",
      nombre: "Mjolnir Legends",
      imagen: "https://zuki2610.github.io/renderizacion_react/assets/img/mjolnir2.png",
      url: "https://simple.ripley.cl/martillo-electronico-fan-marvel-legends-series-thor-mpm00056541002?color_80=blanco&s=mdco",
      contenido:
        "Es un martillo hechizado por Odin. Todo aquel que sostenga este martillo, si es digno, poseerá el poder de Thor.",
    },
    {
      id: "8",
      nombre: "StormBreaker Legends",
      imagen: "https://zuki2610.github.io/renderizacion_react/assets/img/stormbreaker.png",
      url: "https://simple.ripley.cl/hacha-electronica-fan-marvel-legends-series-thor-mpm00056541018?color_80=blanco&s=mdco",
      contenido:
        "Hacha creada por Eitri, enano de Nidavellir y Thor para destruir a Thanos.",
    },
  ];
  return (
    <div className="App bg-dark">
      <Menu isLogin={false}/>
      <Header titulo="Donde podrás comprar los mejores juguetes para ti" />
      <Container fluid className="productos">
        <Row className="row" key="1">
          {contenido.map((item) => {
            return (
              <Col key={item.id}>
                <Cards
                  key={item.id}
                  nombre={item.nombre}
                  imagen={item.imagen}
                  url={item.url}
                  contenido={item.contenido}
                />
              </Col>
            );
          })}
        </Row>
        <Row key="2">
          {contenido2.map((item) => {
            return (
              <Col key={item.id}>
                <Cards
                  key={item.id}
                  nombre={item.nombre}
                  imagen={item.imagen}
                  url={item.url}
                  contenido={item.contenido}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Footer/> 
    </div>
  );
}

export default Productos;
