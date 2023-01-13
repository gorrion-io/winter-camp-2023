import { useState, useEffect, Fragment } from "react";

import Card from "../Card";
import { viking } from "../../../types";

const SingleViking: React.FC<{ viking: viking }> = (props) => {
  const [gotAnyFightingSkills, setGotAnyFightingSkills] = useState(false);
  const {
    viking: {
      fullName,
      presenceOfChildren,
      age,
      hometown,
      canFightWithSword,
      canFightWithAxe,
      canFightWithSpear,
    },
  } = props;

  //
  useEffect(() => {
    if (canFightWithSword || canFightWithAxe || canFightWithSpear) {
      setGotAnyFightingSkills(true);
    }
  }, [canFightWithSword, canFightWithAxe, canFightWithSpear]);

  return (
    <Card>
      <div>
        <h2>Warrior Name: {fullName}</h2>
      </div>
      <div>
        <h2>Attributes: </h2>
        <ul>
          <li>Children: {presenceOfChildren ? "Yes" : "No"}</li>
          <li>Age: {age}</li>
          <li>Hometown: {hometown} </li>
        </ul>
        {gotAnyFightingSkills && (
          <Fragment>
            <h2>Fighting skills:</h2>
            <ul>
              {canFightWithSword && <li>Can fight with sword. </li>}
              {canFightWithAxe && <li>Can fight with axe. </li>}
              {canFightWithSpear && <li>Can fight with spear. </li>}
            </ul>
          </Fragment>
        )}
      </div>
    </Card>
  );
};

export default SingleViking;
