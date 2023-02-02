import React from "react";  
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = (props) => {
const {titulo} = props;

return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className="text-center text-light">{titulo}</h1>
            </div>
        </div>
    </div>
</>
);

}

export default Header;