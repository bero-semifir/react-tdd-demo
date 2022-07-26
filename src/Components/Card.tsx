import { CardProps } from "./Card.type";

const Card = ({ title, body, footer, buttonLabel, handleClick }: CardProps) => {
  return (
    <div>
      <div className="card-title">{title}</div>
    </div>
  );
};

export default Card;
