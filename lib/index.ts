import fs from "fs/promises";
import yaml from "js-yaml";
import { YamlViking, JsonViking, Viking, VikingWeapon } from "../types";

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomWeapon = (): VikingWeapon => {
  const weapons: VikingWeapon[] = ["axe", "sword", "spear"];
  const randomInt = getRandomInt(0, weapons.length - 1);
  return weapons[randomInt];
};

export const getYamlVikings = async (): Promise<YamlViking[]> =>
  yaml.load(await fs.readFile("vikings.yaml", "utf-8")) as YamlViking[];

export const getJsonVikings = async (): Promise<JsonViking[]> =>
  JSON.parse(await fs.readFile("vikings.json", { encoding: "utf-8" }));

export const mapFromYamlVikingToViking = (
  yamlVikings: YamlViking[]
): Viking[] => {
  return yamlVikings.map((viking) => {
    const fullName = `${viking.name} ${viking.name_of_father}son`;
    const data: Viking = {
      fullName,
      age: viking.years_old,
      hometown: viking.has_home_in,
      presenceOfChildren: viking.number_of_children > 0,
      canFightWithAxe: viking.weapon === "axe",
      canFightWithSpear: viking.weapon === "spear",
      canFightWithSword: viking.weapon === "sword",
    };

    return data;
  });
};

export const mapFromJsonVikingToViking = (
  jsonVikings: JsonViking[]
): Viking[] => {
  return jsonVikings.map((viking) => {
    const weapon = getRandomWeapon();
    const data: Viking = {
      fullName: viking.fullName,
      age: viking.age,
      hometown: viking.village,
      presenceOfChildren: viking.hasSon,
      canFightWithAxe: weapon === "axe",
      canFightWithSpear: weapon === "spear",
      canFightWithSword: weapon === "sword",
    };

    return data;
  });
};
