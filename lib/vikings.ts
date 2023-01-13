
import { Viking } from '../types/Viking'
import { send } from 'process'


export const handleVikingsList = (arr1:{}[], arr2:{}[]) => {

  const mapObjectToViking = (obj:any) => {
    return {
      fullName: obj.fullName ? obj.fullName : obj.name,
      presenceOfChildren: obj.hasSon ? obj.hasSon : obj.number_of_children > 0,
      age: obj.age ? obj.age : obj.years_old,
      hometown: obj.village ? obj.village : obj.has_home_in,
      canFightWithSword: obj.weapon === 'sword' ? true : false,
      canFightWithAxe: obj.weapon === 'axe' ? true : false,
      canFightWithSpear: obj.weapon === 'spear' ? true : false,
    }
  }
  
  const vikingsJsonArr: Viking[] = arr1.map((viking:unknown) => mapObjectToViking(viking))
  const vikingsYamlArr: Viking[] = arr2.map((viking:unknown) => mapObjectToViking(viking))

  return [...vikingsJsonArr, ...vikingsYamlArr].filter((viking:Viking) => viking.age > 25 && viking.age < 65)
}