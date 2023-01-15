import SingleViking from "../../components/UI/vikings/SingleViking";
import { validateAndMergeArrays } from "../../lib/vikings";
import vikingsJSON from "../../vikings.json";
import vikingsYAML from "../../vikings.yaml";

import styles from "../../styles/VikingsPage.module.css";

const VikingsPage = () => {
  const mappedVikings = validateAndMergeArrays(vikingsJSON, vikingsYAML).map(
    (viking, index) => {
      return <SingleViking key={index} viking={viking} />;
    }
  );

  return <div className={styles.wrapper}>{mappedVikings}</div>;
};

export default VikingsPage;
