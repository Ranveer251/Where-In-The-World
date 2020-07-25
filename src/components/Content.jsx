import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import CovidData from "./CovidInfo";


function Content(props){
    const [country, setCountry] = useState({
        currencies:[],
        languages:[],
        topLevelDomain:[],
        borders:[]
    });

    const [Data,setData] = useState([]);
    const [hasBorder,setHasBorder] = useState(true);
    

    useEffect( () =>{
        fetchdata();
      },[props.routerProps.match.params.code]);
      

    async function fetchdata(){
        const data = await fetch(
          'https://restcountries.eu/rest/v2/alpha/' + props.routerProps.match.params.code
        );
        const data1 = await fetch(
          'https://restcountries.eu/rest/v2/all'
        );
        const countries = await data.json();
        const fullData = await data1.json();
        setData(fullData);
        setCountry(countries);  
        if(countries.borders.length===0){
            setHasBorder(false);
        }
    }

    return(
        <div >
            <div className="content">
                <div className="flag"><img src={country.flag} alt="Flag"/></div>
                <div className={"moreDetails " + (!props.isDark && "lightText")}>
                    <h3>{country.name}</h3>
                    <div className="specificDetails"> 
                        <div className="leftSide">
                            <div><span className="InfoTitle">Native Name: </span>{country.nativeName}</div>
                            <div><span className="InfoTitle">Population: </span>{country.population}</div>
                            <div><span className="InfoTitle">Region: </span>{country.region}</div>
                            <div><span className="InfoTitle">Sub Region: </span>{country.subregion}</div>
                            <div><span className="InfoTitle">Capital: </span>{country.capital}</div>
                        </div>
                        <div className="rightSide">
                            <div><span className="InfoTitle">Top Level Domain:</span> 
                                {country.topLevelDomain.map((domain,index) => {
                                    if(index===0)
                                        return <span key={index}>{" " + domain}</span>
                                    return <span key={index}>{", " + domain}</span>
                                })}
                                </div>
                            <div><span className="InfoTitle">Currencies:</span> 
                                {country.currencies.map((currency,index) => {
                                    if(index===0)
                                        return <span key={index}>{" " + currency.name}</span>
                                    return <span key={index}>{", " + currency.name}</span>
                                })}
                            </div>
                            <div><span className="InfoTitle">Languages:</span> 
                                {country.languages.map((language,index) => {
                                    if(index===0)
                                        return <span key={index}>{" " + language.name}</span>
                                    return <span key={index}>{", " + language.name}</span>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="borderCountries">
                        <span className="InfoTitle">Border Countries:  </span><span>{!hasBorder && "None"}</span>
                        {country.borders.map(borderCode => {
                            const borderCountry = Data.filter((cntry) => {if(cntry.alpha3Code===borderCode){return cntry;}});
                            return <Link className="btn btn-sm borderC" to={"/details/" + borderCode} key={borderCode} >{borderCountry[0].name}</Link>
                        })}
                    </div>
                </div>
            </div>
            <CovidData isDark={props.isDark} country={country}/>
        </div>
    );
}

export default Content;