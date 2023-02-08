export type Viking = {
  fullName: string
  presenceOfChildren: boolean
  age: number
  hometown: string
  canFightWithSword: boolean
  canFightWithAxe: boolean
  canFightWithSpear: boolean
}

export type Vikings = Viking[]

export type JsonViking = {
  fullName: string
  village: string
  age: number
  valkyrie: string
  hasSon: boolean
}

export type JsonVikings = JsonViking[]

export type YamlViking = {
  name: string
  weapon: string
  name_of_father: string
  has_home_in: string
  years_old: number
  number_of_children: number
}

export type YamlVikings = YamlViking[]

export type Weapon = 'sword' | 'axe' | 'spear'

export type AgeScope = {
  from: number
  to: number
}
