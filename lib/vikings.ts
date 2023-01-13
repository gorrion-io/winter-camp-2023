import { viking, notYetVikingJSON, notYetVikingYAML } from "../types";

export const mergeVikings = (vikings1: any, vikings2: any) => {
  const readyVikingsJSON: viking[] = vikings1
    .filter((viking: notYetVikingJSON) => viking.age >= 25 && viking.age <= 65)
    .map((viking: notYetVikingJSON) => {
      return {
        fullName: viking.fullName,
        presenceOfChildren: viking.hasSon,
        age: viking.age,
        hometown: viking.village,
        canFightWithSword: false,
        canFightWithAxe: false,
        canFightWithSpear: false,
      };
    });

  const readyVikingsYAML: viking[] = vikings2
    .filter(
      (viking: notYetVikingYAML) =>
        viking.years_old >= 25 && viking.years_old <= 65
    )
    .map((viking: notYetVikingYAML) => {
      return {
        fullName: viking.name,
        presenceOfChildren: viking.number_of_children === 0 ? false : true,
        age: viking.years_old,
        hometown: viking.has_home_in,
        canFightWithSword: viking.weapon === "sword" ? true : false,
        canFightWithAxe: viking.weapon === "axe" ? true : false,
        canFightWithSpear: viking.weapon === "spear" ? true : false,
      };
    });

  return readyVikingsJSON.concat(readyVikingsYAML);
};
