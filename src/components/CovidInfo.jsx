import React,{useState,useEffect} from "react";
import {FaCaretUp} from "react-icons/fa";

function CovidData(props){
    

    useEffect(() =>{
        fetchData();
    },[props.country]);

    const [Covid,setCovid] = useState([]);
    const [hasData, setHasData] = useState(true);

    async function fetchData(){
        const covidData = await fetch(
            'https://api.covid19api.com/summary'
        );
        const data = await covidData.json();
        const data1 = data.Countries.filter((country) => {
            if(country.Country===props.country.name){
                return country;
            }
        });
        if(data1.length===0){
            setHasData(false);
        } else{
            setHasData(true);
        }
        if(data1.length===0){} else{
            setCovid(data1[0]);
        }
    }

    if(hasData) {
        return(
            <div className={!props.isDark ? "lightText" : "covid"}>
                <h2>Covid Information</h2>
                <div className="covidCards">
                    <div className="covidCard"> 
                        <h4>Total Confirmed Cases</h4>
                        <div className="number">{Covid.TotalConfirmed}</div>
                        <div><FaCaretUp style={{color:"red"}}/> {Covid.NewConfirmed}</div>
                    </div>
                    <div className="covidCard"> 
                        <h4>Total Deaths</h4>
                        <div className="number">{Covid.TotalDeaths}</div>
                        <div><FaCaretUp style={{color:"red"}}/> {Covid.NewDeaths}</div>
                    </div>
                    <div className="covidCard"> 
                        <h4>Total Recovered</h4>
                        <div className="number">{Covid.TotalRecovered}</div>
                        <div><FaCaretUp style={{color:"#0bfc03"}}/> {Covid.NewRecovered}</div>
                    </div>
                </div>
            </div>
        );
    } else{
        return null;
    }
}

export default CovidData;