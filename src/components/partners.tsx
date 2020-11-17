import React from 'react';
import aws from "../images/aws.png"
import google from "../images/google.png"
import digitalocean from "../images/digitalocean.png"
import firebase from "../images/firebase.png"


const Partners = () => {
    return (
        <div className="partnersCon">
           <h1>skdjfbsjdfb</h1> 
           <div className="partnersImgs">
                <img src={aws} className="aws" />
                <img src={google} className="google" />
                <img src={digitalocean} className="digitalocean"/>
                <img src={firebase} className="firebase" />

           </div>

        </div>
    );
}

export default Partners;
