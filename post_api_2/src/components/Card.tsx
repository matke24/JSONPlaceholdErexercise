import { CardProps } from "../utils/props";
const Card = ({ title, body, userName, style }: CardProps) => {
  return (
    <div
      className={`card mx-auto bg-light p-3 ${style}`}
      style={{ cursor: "pointer" }}
    >
      <h5 className="card-title text-uppercase text-dark">{title}</h5>
      <p className="card-text text-secondary">{body}</p>
      <div className="d-flex justify-content-end">
        <small className="text-black-50 mr-4">{userName}</small>
      </div>
    </div>
  );
};

export default Card;
