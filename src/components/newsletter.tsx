import React from 'react';
import Button from "./button";

const Newsletter = () => {
    return (
        <div>
            <div className="newsCon">
                <div className="newsText">
                    <h1>sdkjfhb</h1>
                    <p>sdhfvkdhfb kjshvdbh g ehwfb uwbf kwbfkwvfm wef kehwbf</p>
                </div>

                <div className="newsForm">
                    <input type="email" ></input>
                    <Button text="Uye Ol" className="newsletterBtn" arrow={true} />
                </div>

            </div>
        </div>
    );
}

export default Newsletter;
