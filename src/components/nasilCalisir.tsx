import React from 'react';
import search from "../images/search.png"
import persons from "../images/persons.png"
import arrow from "../images/arrow.png"
import rockit from "../images/rockit.png"



const NasilCalisir = () => {
    return (
        <div className="nasilSec">
            <div className="nasilHeading">
                <p>Surece Katlmak Cok Koly</p>
                <h1>Nasil Calisir?</h1>
            </div>
           

            <div className="colorCards">
                <div className="cards yelowCard">
                    <img src={search} width="80" style={{paddingTop: "3rem"}}></img>
                    <h5>Girlims Incelyen</h5>
                    <p>Bksnadfih skfewj /ksmdnfwlfn lknsfwijwf sdlvknksmdnfwlfn lknsfwijwf sdlvkn sfvsdfwsfg </p>
                </div>
                <div className="cards greenCard">
                <img src={persons} width="150" style={{paddingTop: "3rem"}}></img>

                <h5>Girlims Incelyen</h5>
                    <p>Bksnadfih skfewj /ksmdnfwlfn lknsfwijwf sdlvknksmdnfwlfn lknsfwijwf sdlvkn sfvsdfwsfg </p>
                </div>
                <div className="cards purpleCard">
                <img src={arrow} width="80" style={{paddingTop: "3rem"}}></img>

                <h5>Girlims Incelyen</h5>
                    <p>Bksnadfih skfewj /ksmdnfwlfn lknsfwijwf sdlvknksmdnfwlfn lknsfwijwf sdlvkn sfvsdfwsfg </p>
                </div>
                <div className="cards redCard">
                    <img src={rockit} width="130" style={{paddingTop: "3rem"}}></img>

                    <h5>Girlims Incelyen</h5>
                    <p>Bksnadfih skfewj /ksmdnfwlfn lknsfwijwf sdlvknksmdnfwlfn lknsfwijwf sdlvkn sfvsdfwsfg </p>
                </div>
            </div>

        </div>
    );
}

export default NasilCalisir;