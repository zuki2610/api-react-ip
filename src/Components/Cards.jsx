import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
    const {nombre, imagen, url, id, contenido} = props;
    return (
        <>
    <Card key={id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text> {contenido}</Card.Text>
        <Button variant="primary" target="_blank" href={url}>Comprar</Button>
      </Card.Body>
    </Card>
    </>
    );
}
export default Cards;