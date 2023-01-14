//import yaml from "js-yaml";
import data from "../vikings.yaml";
import fs from "fs";
export async function getStaticProps() {
  try {
    // const parsedData = yaml.load(fs.readFileSync(data, "utf8"));
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
