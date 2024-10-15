import React from "react";
import '../styles.css'


export default function Header(){
return(
    <div className="header">
        <img className="logo" src="Logo.png" alt="Moviedux" />
        <h2 className="app-subtitle">It's time for popcorn! Find your next moview here </h2>
    </div>
);
}