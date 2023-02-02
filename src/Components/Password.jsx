import React, { useState } from "react";
import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Menu from "./Menu";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from 'react-router-dom';


const Password = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(""); 
  const [entrar, setEntrar] = useState(false);  
  const navigate = useNavigate();
  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
    if (email === "tonystark@avengers.com" && password === "IronMan") {
      setAlert(<Alert className="mb-0" key={"success"} variant={"success"}>
      <Alert.Heading className="mb-0">Hey, bienvenido a Toy Store</Alert.Heading> 
    </Alert>);
    setEntrar(true);
    } else {
      console.log("No eres un vengador");
      setAlert(<Alert className="mb-0" key={"danger"} variant={"danger"}>
        <Alert.Heading className="mb-0">Hey, tu no eres un vengador, no puedes entrar</Alert.Heading>
      </Alert>);
      setEntrar(false);
    }
  };

  return (
    <> 
      <Menu isLogin={true} />
      <div className="Container bg-dark pe-5 ps-5 pt-5 pb-5 mt-0">
        <h1 className="text-light">Iniciar Sesión</h1>
        <Form onSubmit={enviarFormulario} className="text-light bg-dark password pe-5 ps-5 pt-5">
          <Form.Group className="mb-3 mt-0" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Escribe tu correo aquí"
              defaultValue={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos tus datos con alguien más.
              <br />
              "No te preocupes, solo yo te Stalkearé"
              <br/>
              Access Key: tonystark@avengers.com
              <br/>
              Password: IronMan
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {alert}
          {email !== "" && password !== "" && (
            <Button variant="secondary" type="submit" className="button1">
              {" "}
              Entrar{" "}
            </Button>
          )}
            <Form.Group className="mb-3 pt-5 ms-5" controlId="formBasicCheckbox">
             {entrar && <Form.Check onClick={()=> {navigate('/renderizacion_react/productos'); }} type="checkbox" label="Entrá aceptando que Isabel es la mejor" /> }
          </Form.Group>
        </Form>
      </div>
    </>
  ); 
};
export default Password;
