import {Viking,VikingJson,VikingYaml} from "../types/vikingTypes"

function JsonToViking(vikingJson: VikingJson[]){
    return vikingJson.map((el)=>{
        return{
            fullName: el.fullName,
            hometown: el.village,
            age: el.age,
            presenceOfChildren: el.hasSon
        }
    })
}

function YamlToViking(vikingYaml: VikingYaml[]){
    return vikingYaml.map((el)=>{
        return{
            fullName: el.name,
            hometown: el.has_home_in,
            age: el.years_old,
            presenceOfChildren: el.number_of_children > 0 ? true : false,
            canFightWithSword: el.weapon === "sword" ? true : false,
            canFightWithSpear: el.weapon === "spear" ? true : false,
            canFightWithAxe: el.weapon === "axe" ? true : false
        }
    })
}


export default function getVikings(vikingsJson: VikingJson[], vikingsYaml: VikingYaml[]){
    const vikingsFromJson = JsonToViking(vikingsJson) as Viking[]
    const vikingsFromYaml = YamlToViking(vikingsYaml) as Viking[]
    
    return [...vikingsFromJson, ...vikingsFromYaml].filter(el => el.age >= 25 && el.age <=65)
    
}
