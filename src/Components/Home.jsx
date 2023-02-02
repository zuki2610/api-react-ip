import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import { Image } from 'react-bootstrap';


const Home = () => {
return (
    <>
    <Menu isLogin={false}/>
     <div className="home App bg-dark p-5">
    <div className="marvel">
    <Image className="p-5" src="https://raw.githubusercontent.com/zuki2610/renderizacion_react/main/public/assets/img/Logo1.png"/>
    <Header titulo="Donde encontrarás los mejores juguetes y accesorios de Marvel Comics para ti"/>
    </div>
    <Footer /> 
    </div>
    </>
)

}
export default Home;