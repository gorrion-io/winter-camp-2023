import Card from "../Card";
import { viking } from "../../../types";

const SingleViking: React.FC<{ viking: viking }> = (props) => {
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
        <h2>Fighting skills:</h2>
        <ul>
          <li>Can fight with sword: {canFightWithSword ? "Yes" : "No Data"}</li>
          <li>Can fight with axe: {canFightWithAxe ? "Yes" : "No Data"}</li>
          <li>Can fight with spear: {canFightWithSpear ? "Yes" : "No Data"}</li>
        </ul>
      </div>
    </Card>
  );
};

export default SingleViking;
