import React from 'react';
import Button from './button';

const Ytirmici = () => {
    return (
        <div className="yatirmBG">
            <div className="yatirmCon">
                <div className="rightSec">
                    <h1>Yatirimcilar</h1>
                    <p>sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg</p>
                    <Button text="yatirmice" className="yattirmicibBtn" arrow={true} />
                </div>
                <div className="leftSec">
                    <h1>Girisimciler</h1>
                    <p>sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg sdljnfkg</p>
                    <Button text="yatirmice" className="yattirmicibBtn" arrow={true} />
                </div>
            </div>
          
        </div>
    );
}

export default Ytirmici;
