import { useState, useEffect, Fragment } from "react";

import Card from "../Card";
import { viking } from "../../../types";
import styles from "./SingleViking.module.css";

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

  useEffect(() => {
    if (canFightWithSword || canFightWithAxe || canFightWithSpear) {
      setGotAnyFightingSkills(true);
    }
  }, [canFightWithSword, canFightWithAxe, canFightWithSpear]);

  return (
    <Card className={styles["card-margin"]}>
      <div className={styles.name}>
        <p className={styles["border--small"]}>{fullName}</p>
      </div>
      <ul>
        <li>Children: {presenceOfChildren ? "Yes" : "No"}</li>
        <li>Age: {age}</li>
        <li>Hometown: {hometown} </li>
        {gotAnyFightingSkills && (
          <Fragment>
            {canFightWithSword && <li>Can fight with sword. </li>}
            {canFightWithAxe && <li>Can fight with axe. </li>}
            {canFightWithSpear && <li>Can fight with spear. </li>}
          </Fragment>
        )}
      </ul>
    </Card>
  );
};

export default SingleViking;
