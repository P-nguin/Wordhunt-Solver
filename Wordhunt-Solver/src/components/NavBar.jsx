import React from "react"
import "../styles/NavBar.css"
import logo from "../assets/logo.png"

export default function NavBar(){
    return(
        <header className = "navBar--header">
            <img src={logo} className="navBar--logo"/>
            <h1 className="navBar--title">Wordhunt Solver</h1>
        </header>
    )
}