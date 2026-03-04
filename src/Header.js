import React from "react";
import Logo from "./Logo.png";
function Header(){
    return(
        <header>
            <img src={Logo} alt="Little Lemon Logo" width={200}/>
            <h1>Little Lemon</h1>
        </header>
    )
}

export default Header;