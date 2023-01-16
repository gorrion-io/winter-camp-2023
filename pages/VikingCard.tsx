import { Viking } from "../lib/vikings";
import React from "react";

type Props = {
  viking: Viking;
};

const VikingCard: React.FC<Props> = ({ viking }): JSX.Element => {
  const {
    fullName,
    age,
    hometown,
    presenceOfChildren,
    canFightWithSword,
    canFightWithAxe,
    canFightWithSpear,
  } = viking;
  return (
    <div>
      <h4>Imię: {fullName}</h4>
      <p>Wiek: {age}</p>
      <p>{!presenceOfChildren ? "Nie posiada" : "Posiada"} dzieci</p>
      <p>Pochodzi z: {hometown}</p>
      <p>
        Walczy:{" "}
        <strong>
          {(canFightWithAxe && "Toporem") ||
            (canFightWithSword && "Mieczem") ||
            (canFightWithSpear && "Włócznią") ||
            "Młotem"}
        </strong>
      </p>
    </div>
  );
};
export default VikingCard;
