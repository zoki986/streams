import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from './../GoogleAuth';


const Header = (props) => {
    return (
        <div className="ui secondary ponting menu">

            <Link to="/" className="item"> Streamy </Link> 

            <div className="right menu">
                <Link to="/" className="item"> All Streams </Link> 
            </div>

            <GoogleAuth />
        </div>
    );
};

export default Header;
