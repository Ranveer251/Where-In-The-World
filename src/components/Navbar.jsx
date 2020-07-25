import React from "react";
import { FaMoon } from "react-icons/fa";
import { useHistory } from 'react-router-dom';  

function Navbar(props){

    let history = useHistory();

    function home(){
        history.push("/");
    }

    function handleTheme(){
        if(props.isDark){
            props.setIsDark(false);
        } else{
            props.setIsDark(true);
        }    
        document.querySelector("body").classList.toggle("lightBg");
    }

    return(
        <div>
            <nav className={"navbar navbar-expand-lg " + (!props.isDark && "light")}>
                <span className="navbar-brand mb-0 h1" onClick={home}>Where In The World?</span>
                <div onClick={handleTheme} className="nav-right">
                        <div className={"modeIcon"}>
                            <FaMoon />
                        </div>
                    <span className="modeText">Dark Mode</span>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;