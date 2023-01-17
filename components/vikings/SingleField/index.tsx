import styles from "../../../styles/SingleField.module.css";

type Viking = {
  fullName: string;
  presenceOfChildren: boolean;
  age: number;
  hometown: string;
  canFightWithSword: boolean;
  canFightWithAxe: boolean;
  canFightWithSpear: boolean;
};

function SingleField(props: { viking: Viking }): JSX.Element {
  const {
    fullName,
    presenceOfChildren,
    age,
    hometown,
    canFightWithSword,
    canFightWithAxe,
    canFightWithSpear,
  } = props.viking;

  return (
    <tr>
      <td className={styles.td}>{fullName}</td>
      <td className={styles.td}>{presenceOfChildren ? "Yes" : "No"}</td>
      <td className={styles.td}>{age}</td>
      <td className={styles.td}>{hometown}</td>
      <td className={styles.td}>
        {" "}
        {canFightWithSword || canFightWithAxe || canFightWithSpear ? (
          <>
            {canFightWithSword && "Sword"}
            {canFightWithAxe && "Axe"}
            {canFightWithSpear && "Spear"}
          </>
        ) : (
          "None"
        )}
      </td>
    </tr>
  );
}

export default SingleField;
