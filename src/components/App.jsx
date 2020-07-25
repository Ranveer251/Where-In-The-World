import React, {useState,useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";
import Top from "./toTop";
import Details from "./Details";

function App(props){

  const [isDark, setIsDark] = useState(true);

useEffect( () =>{
  fetchdata();
},[]);
  
  const [Cntry,setCntry] = useState([]);
 
async function fetchdata(){
  const data = await fetch(
    'https://restcountries.eu/rest/v2/all'
  );
  const countries = await data.json();
  setCntry(countries);  
}
    
  useEffect(props.hideLoader,[]);
  return(
    <Router>
      <Switch>
        <Route path="/" exact render={ props =>
          <div>
            <Navbar isDark={isDark} setIsDark={setIsDark}/>
            <Search isDark={isDark} Cntry={Cntry} setCntry={setCntry} />
            <Top isDark={isDark}/>
          </div>
        } />
        <Route path="/details/:code" render={ props =>
          <Details setIsDark={setIsDark} isDark={isDark} Cntry={Cntry} setCntry={setCntry} routerProps={props} />
        }/>
      </Switch>
    </Router>
  );
}


export default App;