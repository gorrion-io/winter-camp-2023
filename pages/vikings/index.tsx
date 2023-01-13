import { Fragment } from "react";
import SingleViking from "../../components/UI/vikings/SingleViking";
import { validateAndMergeArrays } from "../../lib/vikings";
import vikingsJSON from "../../vikings.json";
import vikingsYAML from "../../vikings.yaml";

const VikingsPage = () => {
  const mappedVikings = validateAndMergeArrays(vikingsJSON, vikingsYAML).map(
    (viking, index) => {
      return <SingleViking key={index} viking={viking} />;
    }
  );

  return <Fragment>{mappedVikings}</Fragment>;
};

export default VikingsPage;
