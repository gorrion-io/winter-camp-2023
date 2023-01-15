import styles from "../../styles/Vikings.module.css";
import ValidateMergeYamlJsonData from "../../lib/vikings";
import yamldata from "../../vikings.yaml";
import jsondata from "../../vikings.json";
import SingleField from "../../components/vikings/SingleField";
const Vikings = () => {
  const mapVikings = ValidateMergeYamlJsonData(yamldata, jsondata).map(
    (viking, index) => {
      return <SingleField key={index} viking={viking} />;
    }
  );

  return (
    <div className={styles.main}>
      <h1>Załoga na najbliższą wyprawę do Anglii</h1>
      <h2>W wyprawie wezmą tylko udział osoby między 25 a 65 rokiem życia</h2>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tr}>
            <th className={styles.th}>Full Name</th>
            <th className={styles.th}>Has children</th>
            <th className={styles.th}>Age</th>
            <th className={styles.th}>HomeTown</th>
            <th className={styles.th}>Weapon Fighting skills</th>
          </tr>
          {mapVikings}
        </tbody>
      </table>
    </div>
  );
};

export default Vikings;
