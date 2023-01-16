import fs from "fs/promises";
import yaml from "js-yaml";
import { YamlViking, JsonViking, Viking } from "../types";
import { VikingWeapon } from "../types";

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
  return yamlVikings.reduce<Viking[]>((acc, curr) => {
    const fullName = `${curr.name} ${curr.name_of_father}son`;
    const viking: Viking = {
      fullName,
      age: curr.years_old,
      hometown: curr.has_home_in,
      presenceOfChildren: curr.number_of_children > 0,
      canFightWithAxe: curr.weapon === "axe",
      canFightWithSpear: curr.weapon === "spear",
      canFightWithSword: curr.weapon === "sword",
    };

    return [...acc, viking];
  }, []);
};

export const mapFromJsonVikingToViking = (
  jsonVikings: JsonViking[]
): Viking[] => {
  return jsonVikings.reduce<Viking[]>((acc, curr) => {
    const weapon = getRandomWeapon();
    const viking: Viking = {
      fullName: curr.fullName,
      age: curr.age,
      hometown: curr.village,
      presenceOfChildren: curr.hasSon,
      canFightWithAxe: weapon === "axe",
      canFightWithSpear: weapon === "spear",
      canFightWithSword: weapon === "sword",
    };

    return [...acc, viking];
  }, []);
};
