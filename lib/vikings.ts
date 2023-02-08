import type { Viking, Vikings, JsonViking, JsonVikings, YamlViking, YamlVikings, Weapon, AgeScope } from '@/types'
import { readYamlData, getWeapon } from '@/lib/helpers'
import jsonVikings from '@/vikings.json'

const availableWeapons: Weapon[] = ['sword', 'axe', 'spear']
const ageScope: AgeScope = {
  from: 25,
  to: 65,
}

const isWithinAge = (age: number): boolean => {
  if (age >= ageScope.from && age <= ageScope.to) return true
  return false
}

const getYamlVikings = async (): Promise<YamlVikings> => await readYamlData('./vikings.yaml')

const getJsonVikings = (): JsonVikings => jsonVikings

const prepareYamlViking = ({ name, weapon, name_of_father, has_home_in, years_old, number_of_children }: YamlViking): Viking => {
  const viking: Viking = {
    fullName: `${name} ${name_of_father}sson`,
    presenceOfChildren: number_of_children > 0,
    age: years_old,
    hometown: has_home_in,
    canFightWithSword: weapon === 'sword',
    canFightWithAxe: weapon === 'axe',
    canFightWithSpear: weapon === 'spear',
  }
  return viking
}

const prepareJsonViking = ({ fullName, hasSon, age, village }: JsonViking): Viking => {
  const weapon: Weapon = getWeapon(availableWeapons)
  const viking: Viking = {
    fullName: fullName,
    presenceOfChildren: hasSon,
    age: age,
    hometown: village,
    canFightWithSword: weapon === 'sword',
    canFightWithAxe: weapon === 'axe',
    canFightWithSpear: weapon === 'spear',
  }
  return viking
}

const mergeVikings = (jsonVikings: JsonVikings, yamlVikings: YamlVikings): Vikings => {
  const vikingsFromJson: Vikings = jsonVikings.map((jsonViking) => prepareJsonViking(jsonViking))
  const vikingsFromYaml: Vikings = yamlVikings.map((yamlViking) => prepareYamlViking(yamlViking))
  const vikings: Vikings = [...vikingsFromJson, ...vikingsFromYaml]
  const filteredVikings = vikings.filter(({ age }) => isWithinAge(age))
  return filteredVikings
}

export { getJsonVikings, getYamlVikings, mergeVikings }
