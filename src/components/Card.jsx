import React from "react";
import {useHistory} from "react-router-dom";
import Fade from "react-reveal/Fade";

function Card(props){
    let history = useHistory();
    const Info = props.country;
    if(Info.region==="Americas"){
        Info.region="America";
    }

    function handleClick(){
        history.push(`/details/${Info.alpha3Code}`);
    }

    return(
        <Fade bottom>
            <div onClick={handleClick} className={"card " + (!props.isDark && "light")}>
                <div className="imgContainer"><img src={Info.flag} alt="Country Flag" /></div>
                <div className="cardInfo">
                    <h2>{Info.name}</h2>
                    <div>
                        <div>Population: {Info.population}</div>
                        <div>Region: {Info.region}</div>
                        <div>Capital: {Info.capital}</div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default Card;