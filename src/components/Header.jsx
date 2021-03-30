import React, {useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom'

export default function Header() {
const refHeader = useRef();
const history = useHistory();    


    useEffect(function(){

    window.addEventListener('scroll', function(e){
        if(window.scrollY > 50)refHeader.current.classList.add('scrolled');
        else if(window.scrollY<50)refHeader.current.classList.remove('scrolled');
    })
});

    return (
        <>
        <header  ref={refHeader}>
            <div className="container">
            <article>
                <p className="brand-logo" onClick={()=>history.push("/")}>ARTiकल</p>
            </article>
            <article>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                    <p onClick={()=>history.push("/article")}>Contents</p>
                    </li>
                    <li className="list-inline-item">
                <p>About Us</p>
                    </li>
                    <li className="list-inline-item">
                <button className="btn-def">Login</button>
                    </li>
                    <li className="list-inline-item">
                <button className="btn-def">Sign Up</button>
                    </li>
                </ul>
            </article>
            </div>
        </header>
        </>);
}
