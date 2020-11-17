import React from 'react';
import Button from "../components/button";

const Header = () => {
    return (
        <div>
            <div className="homeHeader">
                <div className="headerContent">
                <h2 className="header__h2">hemşirelikte inovasyon akademisi</h2>
                <div className="HeaderNumCon">
                        <div className="HeaderNumbers">
                            <h4>11,500TL</h4>
                            <p>Yatirm Yaplilan</p>
                        </div>
                        <div className="HeaderNumbers">
                            <h4>45,000TL</h4>
                            <p>Hedavlenan</p>
                        </div>
                        <div className="HeaderNumbers">
                            <h4>2</h4>
                            <p>Yatirmci</p>
                        </div>
                        
                </div>
                <Button text="DETAYA GIT" className="headerBtn" />
                </div>

             
            </div>

            <div className="redHeaderCon">

                <div className="redHeaderContent">

                    <h2>BAmşirelikte inovasyon akademisi</h2>
                    <p>elikte inovasyon inovasyon akademisihemşirelikte inovasyon akademisihemşirelikte inovasyon akademisihemşirelikte inovasyon akademisihemşirelikte inovasyon akademisi.</p>
                </div>
            </div>

        </div>
    );
}

export default Header;
