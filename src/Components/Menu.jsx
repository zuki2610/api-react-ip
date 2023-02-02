import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import { contenido } from "../Data/Productos";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
const Menu = (props) => {
  const { isLogin } = props;
  const [productos, setProductos] = useState(contenido);
  const [modalShow, setModalShow] = useState(false);
  const [juguete, setJuguete] = useState("");
  const [heroe, setHeroe] = useState("");
  const [buscador, setBuscador] = useState("");
  const [respaldo, setRespaldo] = useState(productos);

  const buscarProducto = (e) => {
    e.preventDefault();
    console.log(buscador);
    const resultado = respaldo.filter((item) => {
      return item.heroe.toLowerCase() === buscador.toLowerCase();
    });

    console.log(resultado);
    console.log(respaldo);
    setProductos(resultado);
  };
  const agregarProducto = (e) => {
    e.preventDefault();

    setProductos([
      ...productos,
      {
        id: respaldo.length + 1,
        juguete,
        heroe,
      },
    ]);

    setRespaldo([
      ...productos,
      {
        id: respaldo.length + 1,
        juguete,
        heroe,
      },
    ]);
  };

  if (isLogin === false) {
    return (
      <>
        <Modal
          show={modalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton className="bg-dark text-light">
            <Modal.Title id="contained-modal-title-vcenter">
              <Form className="form-title">
                <i className="bi bi-search me-2 ms-5"></i>
                <Badge bg="dark" className="me-5 pe-5">
                  Productos Disponibles
                </Badge>
                <Form.Control
                  className="ps-2 ms-5 "
                  size="sm"
                  type="text"
                  placeholder="Busqueda por Nombre"
                  onChange={(e) => setBuscador(e.target.value)}
                />
                <Button
                  className="ms-2 "
                  variant="info"
                  onClick={buscarProducto}
                >
                  Buscar
                </Button>{" "}
              </Form>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Busqueda de Productos</h4>
            <ul>
              {productos.map((item) => (
                <li key={item.id}>
                  Heroe: {item.heroe}
                  <p>Juguete: {item.juguete}</p>
                </li>
              ))}
            </ul>
            <strong>
              Si el producto que buscas no esta disponible, agregalo aqui
            </strong>
            <Form>
              <Form.Control
                className="mt-2"
                size="sm"
                type="text"
                placeholder="Ingresa el Heroe"
                onChange={(e) => setHeroe(e.target.value)}
              />
              <Form.Control
                className="mt-2"
                size="sm"
                type="text"
                placeholder="Ingresa el Juguete"
                onChange={(e) => setJuguete(e.target.value)}
              />
              <Button className="mt-2" variant="info" onClick={agregarProducto}>
                Agregar
              </Button>{" "}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/api-react-ip/home">
              <Navbar.Brand>Toy Store</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <LinkContainer to="/api-react-ip/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/api-react-ip/productos">
                <Nav.Link>Productos</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#footer">About Us</Nav.Link>
              <LinkContainer to="/api-react-ip/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer
                onClick={() => {
                  setModalShow(true);
                }}
                to=" "
              >
                <Nav.Link>
                  {" "}
                  <i className="bi bi-search"></i>Buscar
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
};
export default Menu;
