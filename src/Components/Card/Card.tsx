import { useState } from "react";
import { CardProps } from "./Card.type";
import './Card.css';

const Card = ({ title, body, footer, buttonLabel, handleClick }: CardProps) => {

  const [champ, setChamp] = useState<string | undefined>(undefined)

  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-body">{body}</div>
      {
        // rendu conditionnel en React
        footer && <div className="card-footer">{footer}</div>
      }
      {
        (buttonLabel && handleClick) &&
        <button type="button" onClick={()=>handleClick()}>{buttonLabel}</button>
      }
      <input type="text" defaultValue={champ} onChange={({target})=>{setChamp(target.value)}} />
    </div>
  );
};

export default Card;
