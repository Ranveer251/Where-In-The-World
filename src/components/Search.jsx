import React, { useState } from "react";
import {FaSearch} from "react-icons/fa";
import Card from "./Card";
import NoResults from "./NoResults";
import Filter from "./Filter";

function Search(props){
    const [searched, setSearched] = useState("");
    const [area, setArea] = useState("");

    function handleChange(e){
        const {value} = e.target;
        setSearched(value);
    }

    let filteredData = [];

    let filtered = props.Cntry.filter((data) => {
        if(area==="" || area==="All Regions"){
            return data;
        } else if(area===data.region){
            return data;
        }
    });
    
    filtered = filtered.filter((data) => {
        if(searched==="" ){
            return data;
        } else if(data.name.toLowerCase().includes(searched.toLowerCase())){
            return data;
        }
    });

    if(filtered.length === 0 ){
        filteredData = <NoResults />;
    } else{
        filteredData = filtered.map((data,index) =>{
            return( <Card isDark={props.isDark} key={data.alpha3Code} country={data} />);
        });
    }

    return(
        <div>
            <section id="Search">
                <form>
                    <button onClick={(e) => e.preventDefault()} className={"searchBtn " + (!props.isDark && "light")}><FaSearch /></button>
                    <input onChange={handleChange} className={"search " + (!props.isDark && "light" )}  type="text" placeholder="Search For a Country..." value={searched}/>
                    <Filter isDark={props.isDark} area={area} setArea={setArea}/>
                </form>
            </section>
            <section id="cardSection"> 
                {filteredData} 
            </section>
        </div>
    );
}

export default Search;