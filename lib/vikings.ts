import vikingsJson from '../vikings.json';
import yaml from 'js-yaml';
import fs from 'fs';

export const getVikings = () => {
  try {
    // Get yaml data
    const fileContents = fs.readFileSync('vikings.yaml', 'utf8');
    const yamlData: any = yaml.load(fileContents);
    // Construct vikings objects from yaml file
    const yamlVikings = yamlData.map((data: any) => ({
      fullName: data.name,
      presenceOfChildren: data.number_of_children > 0,
      age: data.years_old,
      hometown: data.has_home_in,
      canFightWithSword: data.weapon === "sword",
      canFightWithAxe: data.weapon === "axe",
      canFightWithSpear: data.weapon === "spear",
    }));
    // Construct vikings objects from json file
    const jsonVikings = vikingsJson.map((data: any) => ({
      fullName: data.fullName,
      presenceOfChildren: data.hasSon,
      age: data.age,
      hometown: data.village,
      canFightWithSword: false,
      canFightWithAxe: false,
      canFightWithSpear: false,
    }));
    // Filter vikings to match age
    const filteredVikings = [...yamlVikings, ...jsonVikings].filter((viking) => {
      return viking.age > 25 && viking.age < 65;
    });

    return filteredVikings;
  } catch (e) {
    console.log(e);
  }
};