import React from 'react';
interface ButtonProps {
  className?: string,
  arrow?: boolean,
  text: string
 
}
const Button = ({className, arrow = false, text}: ButtonProps) => {
    return (
        <div className={`btn ${className}`}>
            <h5> {text}</h5>
            {arrow && (<div><i className="fas fa-long-arrow-alt-right"></i></div>)}
            
        </div>
    );
}

export default Button;
