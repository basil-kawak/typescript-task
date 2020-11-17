import React, { useState, useEffect } from 'react';
import Card from "./card";
import {uid} from "uid";
import Button from './button';
export default function Bar(){
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState([]);
  const [num, setNum] = useState(1);
  const [sections, setSections] = useState([1]);
  const [next, setNext] = useState(true);
  const [previous, setPrevious] = useState(false);
  
    const loadData = async() =>{
    fetch("https://www.dinamo3.com/projects/all")
    .then(res => res.json())
    .then(res =>{
      setData(res);
     
      const length = Math.ceil(res.length / 3);

      let sections = [1];
      for(let i = 0; i < length; i++){
        sections = [...sections, i]
      }
      sections.shift()
      setSections(sections);
      const displayData = res.slice(0, 3);
      setDisplay(displayData)
    })
  }


  // pullNewData
  const pullNewData = (num: number) =>{
    // if on section not 1
    const start = (num - 1)  * 3; 
    const end = start + 3;
    const displayData = data.slice(start, end);
    setDisplay(displayData);
    setNum(num)
  }

  const handleNext = () =>{
    if(num >= sections.length){
      return
    }
    pullNewData(num +1)
  }
  const handlePrevious = () =>{
    if(num === 1){
      return
    }
    pullNewData(num -1)
  }

  const disableNext = () =>{
   if(num === sections.length && num !== 1){
     setNext(false)
   }else{
    setNext(true)
   }
  }
  const disablePrevious = () =>{
    if(num === 1){
      setPrevious(false);
    }
    if(num > 1){
      setPrevious(true);
    }
  }

  useEffect(()=>{
    loadData();  
  }, [])
  useEffect(()=>{
    disableNext();  
    disablePrevious();
  }, [num])

return (
  <div className="main__con">
      <div className="project">
            <h2>Projects</h2>
            </div>
            <div className="projectText">
                <p>skfjbskhjfb jsdfbskjfb /jkfbvskjfvb</p>
                <p>skfjbskhjfb jsdfbskjfb /jkfbvskjfvb</p>
                <Button text="Tumu" className="projectBtn" />

            </div>
   <div className="main__card"> {display.map((index) => (<Card key={uid()} ele={index} />))}</div>
  <div className="bar">
    
    <div className="bar__container">
    <div className={`bar__inner ${!previous && "disable"}`} onClick={ handlePrevious} > Previous</div>
      <div className="bar__inner bar__mid">
        {sections.map((index) => (    <div onClick={() => pullNewData(index +1)} key={uid()} className={`bar__mid_section ${index + 1 === num && "selected"}`}>{index + 1}</div>))}
      </div>
    <div className={`bar__inner ${!next && "disable"}`} onClick={ handleNext}>Next</div>
  </div>
  </div>
  </div>

  )
}