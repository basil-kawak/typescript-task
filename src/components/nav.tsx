import React from 'react';
import { NavLink } from "react-router-dom";


const nav = () => {
    return (
        <div className="navBarCon">
        <h1>LOGO</h1>
        <>
            <div className="navsCon">
                <NavLink className="navs" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

                <NavLink className="navs" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

                <NavLink className="navs" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

                <NavLink className="navs" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

        
            </div>
        </>
        </div>
    );
}

export default nav;
