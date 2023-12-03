import React, { useState } from "react";
import './header.css'

function Header(props) {
    const [showHeader, setShowHeader] = useState("max-[500px]:hidden");
    
    
    function handleClick(event) {
        event.preventDefault();
    
        if(showHeader == "max-[500px]:hidden") {
            setShowHeader("max-[500px]:block");
            document.body.classList.add('overflow-hidden');
        } else if(showHeader == "max-[500px]:block") {
            setShowHeader("max-[500px]:hidden");
            // document.body.classList.remove('overflow-hidden');
        }
    }
    
    return(
     

        <div className={"header px-[2vw] py-[1vw] " + props.bgColor }>
           
            <button onClick={handleClick} className="bar-button">
                <i class="fa-solid fa-bars bar-icon"></i>
            </button>
            <div className={"header-right " + showHeader}>
               
                
                <a className="header-text" class={props.classProject} href="/howtouse">Tutorial Cara Pakai</a>
                <a href="/login">
                    <button className={props.buttonColor}>Login</button>
                </a>
                
            </div>
        </div>
    );
}

export default Header;