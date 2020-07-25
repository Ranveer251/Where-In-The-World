import React,{useState,useEffect,useRef} from "react";
import {IconContext} from "react-icons";
import {FaCaretDown} from "react-icons/fa";

function Filter(props){
    const [showAreas, setshowAreas] = useState(false);
    const [style, setStyle] = useState({display:"none"});
    const [filtered, setfiltered] = useState(false);

    function handleFilter(e){
        e.preventDefault();
        setshowAreas(!showAreas);
    }

    function handleClick(e){
        const {name} = e.target;
        setStyle({display:"block"})
        setfiltered(true);
        props.setArea(name);
    }


    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setshowAreas(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return(
        <div ref={wrapperRef} className={"filter " + (!props.isDark && "light")}>
            <button onClick={handleFilter} className={"btn btn-lg " + (!props.isDark ? "light" : "white") } type="button" id="dropdownBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {!filtered ? "Filter By Region" : props.area} 
                <div className={"dropdownArrow " + (!props.isDark && "light")}>
                    <FaCaretDown />
                </div>
            </button>
            <div className={"dropdown-menu " + (showAreas ? "show " : "hide ") + (!props.isDark && "light")} aria-labelledby="dropdownMenuButton">
                <a onClick={handleClick} style={style} className="dropdown-item" name="All Regions" href="#">All Regions</a>
                <a onClick={handleClick} className="dropdown-item" name="Africa" href="#">Africa</a>
                <a onClick={handleClick} className="dropdown-item" name="America" href="#">America</a>
                <a onClick={handleClick} className="dropdown-item" name="Asia" href="#">Asia</a>
                <a onClick={handleClick} className="dropdown-item" name="Europe" href="#">Europe</a>
                <a onClick={handleClick} className="dropdown-item" name="Oceania" href="#">Oceania</a>
            </div>
        </div>
    );
}

export default Filter;