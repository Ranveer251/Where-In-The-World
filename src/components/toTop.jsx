import React,{useState} from "react";
import {FaArrowCircleUp} from "react-icons/fa";


function Top(){

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
    
    function handleClick(event){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }


    window.addEventListener('scroll', checkScrollTop);
    
    return(
        <div className="toTop" onClick={handleClick}><FaArrowCircleUp  style={{width: "50px",height: "50px",color: "hsl(209, 23%, 22%)", display: showScroll ? 'flex' : 'none'}}/></div>
    );
}

export default Top;