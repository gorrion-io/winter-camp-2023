type yaml = {
  name: string;
  weapon: string;
  name_of_father: string;
  has_home_in: string;
  years_old: number;
  number_of_children: number;
};
type json = {
  fullName: string;
  village: string;
  age: number;
  valkyrie: string;
  hasSon: boolean;
};
type Viking = {
  fullName: string;
  presenceOfChildren: boolean;
  age: number;
  hometown: string;
  canFightWithSword: boolean;
  canFightWithAxe: boolean;
  canFightWithSpear: boolean;
};

function transformData(data: yaml | json): Viking {
  if ("name" in data) {
    return {
      fullName: data.name,
      presenceOfChildren: data.number_of_children > 0,
      age: data.years_old,
      hometown: data.has_home_in,
      canFightWithSword: data.weapon === "sword",
      canFightWithAxe: data.weapon === "axe",
      canFightWithSpear: data.weapon === "spear",
    };
  } else {
    return {
      fullName: data.fullName,
      presenceOfChildren: data.hasSon,
      age: data.age,
      hometown: data.village,
      canFightWithSword: false,
      canFightWithAxe: false,
      canFightWithSpear: false,
    };
  }
}

export default async function getStaticProps(yaml: [yaml], json: Array<json>) {
  const datayaml = yaml.map((data: yaml) => transformData(data));
  const datajson = json.map((data: json) => transformData(data));

  const connectedArray = [...datajson, ...datayaml];
  return connectedArray;
}
