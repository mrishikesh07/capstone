import React from "react";
import Logo from "./Logo.png";
function Header(){
    return(
        <header>
            <img src={Logo} alt="Little Lemon Logo" width={200}/>
        </header>
    )
}

export default Header;