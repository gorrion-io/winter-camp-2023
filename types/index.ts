export interface Viking {
  fullName: string;
  presenceOfChildren: boolean;
  age: number;
  hometown: string;
  canFightWithSword: boolean;
  canFightWithAxe: boolean;
  canFightWithSpear: boolean;
}

export type VikingWeapon = "axe" | "sword" | "spear";

export interface YamlViking {
  name: string;
  weapon: VikingWeapon;
  name_of_father: string;
  has_home_in: string;
  years_old: number;
  number_of_children: number;
}

export interface JsonViking {
  fullName: string;
  village: string;
  age: number;
  valkyrie: string;
  hasSon: boolean;
}
