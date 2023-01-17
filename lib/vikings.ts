import { Viking } from "../types/viking";
type vikingDataJSON = {
  fullName: string;
  village: string;
  age: number;
  valkyrie: string;
  hasSon: boolean;
};
type vikingDataYaml = {
  name: string;
  weapon: "sword" | "spear" | "axe" | "hammer";
  name_of_father: string;
  has_home_in: string;
  years_old: number;
  number_of_children: number;
};

export const handleVikingList = (
  vikingsJSON: Array<vikingDataJSON>,
  vikingsYaml: Array<vikingDataYaml>
) => {
  const jsonVikingList: Array<Viking> = vikingsJSON.map((vikingJSON) => {
    const fullViking = {
      fullName: vikingJSON.fullName,
      presenceOfChildren: vikingJSON.hasSon ? true : false,
      age: vikingJSON.age,
      hometown: vikingJSON.village,
      canFightWithSword: vikingsJSON.indexOf(vikingJSON) <= 2 ? true : false,
      canFightWithAxe: vikingsJSON.indexOf(vikingJSON) < 6 ? true : false,
      canFightWithSpear: vikingsJSON.indexOf(vikingJSON) >= 6 ? true : false,
    };
    return fullViking;
  });
  const yamlVikingList: Array<Viking> = vikingsYaml.map((vikingYaml) => {
    const fullViking = {
      fullName: `${vikingYaml.name} ${vikingYaml.name_of_father}sson`,
      presenceOfChildren: vikingYaml.number_of_children > 0 ? true : false,
      age: vikingYaml.years_old,
      hometown: vikingYaml.has_home_in,
      canFightWithSword: vikingYaml.weapon == "sword" ? true : false,
      canFightWithAxe: vikingYaml.weapon == "axe" ? true : false,
      canFightWithSpear: vikingYaml.weapon == "spear" ? true : false,
    };
    return fullViking;
  });
  const fullVikingList: Array<Viking> = [...jsonVikingList, ...yamlVikingList];
  const vikingList: Array<Viking> = fullVikingList.filter(
    (viking) => viking.age > 25 && viking.age < 65
  );
  return vikingList;
};
