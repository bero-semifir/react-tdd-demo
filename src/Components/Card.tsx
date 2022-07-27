import { CardProps } from "./Card.type";

const Card = ({ title, body, footer, buttonLabel, handleClick }: CardProps) => {
  return (
    <div>
      <div className="card-title">{title}</div>
      <div className="card-body">{body}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
};

export default Card;
