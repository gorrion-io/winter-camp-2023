import { ReactNode } from "react";
import classes from "./Card.module.css";

type Props = {
  children: ReactNode;
  className: string;
};

const Card: React.FC<Props> = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
