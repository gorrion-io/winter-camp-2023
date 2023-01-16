import yaml from "js-yaml";
import * as fs from "fs";

export type Viking = {
  fullName: string;
  presenceOfChildren: boolean;
  age: number;
  hometown: string;
  canFightWithSword: boolean;
  canFightWithAxe: boolean;
  canFightWithSpear: boolean;
};

export default function MergeVikingLists(): Viking[] {
  const YAMLcontent = yaml.load(
    fs.readFileSync("./vikings.yaml", "utf-8")
  ) as Viking[];

  const JSONcontent = JSON.parse(
    fs.readFileSync("./vikings.json", "utf-8")
  ) as Viking[];

  const MappedYAMLVikings: Viking[] = YAMLcontent.filter(
    (Vikings: any) => Vikings.years_old >= 25 && Vikings.years_old <= 65
  ).map((Vikings: any) => {
    return {
      fullName: Vikings.name + " " + Vikings.name_of_father,
      presenceOfChildren: Vikings.number_of_children > 0,
      age: Vikings.years_old,
      hometown: Vikings.has_home_in,
      canFightWithSword: Vikings.weapon === "sword",
      canFightWithAxe: Vikings.weapon === "axe",
      canFightWithSpear: Vikings.weapon === "spear",
    };
  });

  const MappedJSONVikings: Viking[] = JSONcontent.filter(
    (Vikings: any) => Vikings.age >= 25 && Vikings.age <= 65
  ).map((Vikings: any) => {
    return {
      fullName: Vikings.fullName,
      presenceOfChildren: Vikings.hasSon,
      age: Vikings.age,
      hometown: Vikings.village,
      canFightWithSword: Vikings.weapon === "sword",
      canFightWithAxe: Vikings.weapon === "axe",
      canFightWithSpear: Vikings.weapon === "spear",
    };
  });

  return [...MappedJSONVikings, ...MappedYAMLVikings];
}
