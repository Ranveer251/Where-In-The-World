import React from "react";
import { useHistory } from 'react-router-dom';
import {FaArrowLeft} from "react-icons/fa";

function Back(props){
    let history = useHistory();
    return(
        <div>
            <button onClick={() => history.goBack()} className={"btn btn-md back " + (!props.isDark && "light")}><FaArrowLeft /> Back</button>
        </div>
    );
}

export default Back;