import vikingJson from '../vikings.json'
// @ts-ignore: Unreachable code error
import vikingYaml from '../vikings.yaml'

type Viking = {
    fullName: string
    presenceOfChildren: boolean
    age: number
    hometown: string
    canFightWithSword: boolean
    canFightWithAxe: boolean
    canFightWithSpear: boolean
}

export function fetchVikings() {
    const mappedJsonVikings: Viking[] = vikingJson
        .filter((viking: any) => viking.age >= 25 && viking.age <= 65)
        .map((viking: any) => {
            const ability: number = Math.floor(Math.random() * 3)
            return {
                fullName: viking.fullName,
                presenceOfChildren: viking.hasSon,
                age: viking.age,
                hometown: viking.village,
                canFightWithSword: ability === 0,
                canFightWithAxe: ability === 1,
                canFightWithSpear: ability === 2,
            }
        })

    const mappedYamlVikings: Viking[] = vikingYaml
        .filter(
            (viking: any) => viking.years_old >= 25 && viking.years_old <= 65
        )
        .map((viking: any) => {
            const ability: number = Math.floor(Math.random() * 3)
            return {
                fullName: viking.name,
                presenceOfChildren: viking.number_of_children > 0,
                age: viking.years_old,
                hometown: viking.has_home_in,
                canFightWithSword: viking.weapon === 'sword',
                canFightWithAxe: viking.weapon === 'axe',
                canFightWithSpear: viking.weapon === 'spear',
            }
        })

    const mappedVikings = [...mappedJsonVikings, ...mappedYamlVikings]

    return mappedVikings
}
