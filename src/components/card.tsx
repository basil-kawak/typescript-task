import React, { useEffect } from 'react';
import Button from './button';
interface CardsProps {
    ele: any,
   
  }
const Cards = ({ele}: CardsProps) => {
    return (
        <div className="cards" > 
                    <Button text={`${ele.goal} TL ` } className="yellow__btn" />

            <div className="card">

                <div className="upperCard"><img className="image" src={ele.image} />
                
                </div>
                <div className="midCard">
                    <span className="grayCardText">{}</span>
                    <h2 className="blueHeading">{ele.user.name}</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                         standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                         make a type specimen book.
                    </p>
                    <hr className="line"></hr>
                </div>
                <div className="downCard">
                    <div className="circlesCont">
                        <div className="bigCircle">
                            <div className="smallCircle">{ele.maxShareRate}%</div>
                        </div>
                    </div>
                    <div className="numbersCont">
                        <div className="numbers">
                            <h4>{ele.shareRate}</h4>
                            <p>Yatirmci</p>
                        </div>
                        <div className="numbers">
                            <h4>{ele.duration}TL</h4>
                            <p>Yatir somthing</p>
                        </div>
                        <div className="numbers">
                            <h4>{ele.shareRate}%</h4>
                            <p>Yatirmci</p>
                        </div>
                        <div className="numbers">
                            <h4>{ele.goal}TL</h4>
                            <p>Yatir somthing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cards;