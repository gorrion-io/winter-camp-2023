import { viking, rawJsonViking, rawYamlViking } from "../types";

const getUniqueJsonArray = (rawJson: rawJsonViking[]) => {
  return rawJson.filter(
    (v: any, i: number, a: any) =>
      a.findIndex((v2: any) =>
        ["fullName", "age", "village", "valkyrie", "hasSon"].every(
          (k: any) => v2[k] === v[k]
        )
      ) === i
  );
};

const getUniqueYamlArray = (rawJson: rawYamlViking[]) => {
  return rawJson.filter(
    (v: any, i: number, a: any) =>
      a.findIndex((v2: any) =>
        [
          "name",
          "years_old",
          "has_home_in",
          "name_of_father",
          "number_of_children",
          "weapon",
        ].every((k: any) => v2[k] === v[k])
      ) === i
  );
};

const mapJsonToViking = (rawJson: rawJsonViking[]) => {
  const uniqueRawJson = getUniqueJsonArray(rawJson);

  const mappedVikings: viking[] = uniqueRawJson
    .filter((viking: rawJsonViking) => viking.age >= 25 && viking.age <= 65)
    .map((viking: rawJsonViking) => {
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
  return mappedVikings;
};

const mapYamlToViking = (rawYaml: rawYamlViking[]) => {
  const uniqueRawYaml = getUniqueYamlArray(rawYaml);

  const mappedVikings: viking[] = uniqueRawYaml
    .filter(
      (viking: rawYamlViking) =>
        viking.years_old >= 25 && viking.years_old <= 65
    )
    .map((viking: rawYamlViking) => {
      return {
        fullName: `${viking.name} ${viking.name_of_father}sson`,
        presenceOfChildren: viking.number_of_children === 0 ? false : true,
        age: viking.years_old,
        hometown: viking.has_home_in,
        canFightWithSword: viking.weapon === "sword" ? true : false,
        canFightWithAxe: viking.weapon === "axe" ? true : false,
        canFightWithSpear: viking.weapon === "spear" ? true : false,
      };
    });

  return mappedVikings;
};

export const validateAndMergeArrays = (
  rawJson: rawJsonViking[],
  rawYaml: any
) => {
  const mappedJsonVikings = mapJsonToViking(rawJson);
  const mappedYamlVikings = mapYamlToViking(rawYaml);

  const names = new Set(mappedJsonVikings.map((viking) => viking.fullName));
  const villages = new Set(mappedJsonVikings.map((viking) => viking.hometown));
  const merged = [
    ...mappedJsonVikings,
    ...mappedYamlVikings.filter((viking) => {
      return !names.has(viking.fullName) && !villages.has(viking.hometown);
    }),
  ];

  console.log(merged);
  return merged;
};
