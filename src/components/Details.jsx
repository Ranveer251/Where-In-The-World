import React,{useEffect,useState} from "react";
import Back from "./Back";
import Content from "./Content";
import Bounce from "react-reveal/Bounce";
import Navbar from "./Navbar";

function Details(props){
    

    return(
        <Bounce top>
            <Navbar isDark={props.isDark} setIsDark={props.setIsDark}/>
            <div className="details">
                <Back isDark={props.isDark}/>
                <Content isDark={props.isDark} Cntry={props.Cntry} setCntry={props.setCntry} routerProps={props.routerProps} />
            </div>
        </Bounce>
    );
}

export default Details;