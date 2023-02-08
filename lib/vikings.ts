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

const prepareViking = (viking: YamlViking | JsonViking): Viking => {
  const isFromYaml = 'weapon' in viking
  const weapon = isFromYaml ? viking.weapon : getWeapon(availableWeapons)

  const readyViking: Viking = {
    fullName: isFromYaml ? `${viking.name} ${viking.name_of_father}sson` : viking.fullName,
    presenceOfChildren: isFromYaml ? viking.number_of_children > 0 : viking.hasSon,
    age: isFromYaml ? viking.years_old : viking.age,
    hometown: isFromYaml ? viking.has_home_in : viking.village,
    canFightWithSword: weapon === 'sword',
    canFightWithAxe: weapon === 'axe',
    canFightWithSpear: weapon === 'spear',
  }
  return readyViking
}

const mergeVikings = (jsonVikings: JsonVikings, yamlVikings: YamlVikings): Vikings => {
  const vikings: Vikings = [...jsonVikings, ...yamlVikings].map((viking) => prepareViking(viking))
  const filteredVikings = vikings.filter(({ age }) => isWithinAge(age))
  return filteredVikings
}

export { getJsonVikings, getYamlVikings, mergeVikings }
