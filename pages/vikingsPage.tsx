import vikingsJson from "../vikings.json"
import vikigsYaml from "../vikings.yaml"
import getVikings from "../lib/vikings"
import { VikingJson,Viking,VikingYaml } from "../types/vikingTypes"
import SingleViking from "./components/singleViking"
import styles from "../styles/vikings.module.css"
import { useEffect, useState } from "react"

export default function Vikings() {

  const [allVikings ,setAllVikings]= useState<Viking[]>()

  useEffect(()=>{
    const allVikingsJson = vikingsJson as VikingJson[]
    const allVikingsYaml = vikigsYaml as VikingYaml[]
    setAllVikings(getVikings(allVikingsJson, allVikingsYaml))
  },[vikingsJson, vikigsYaml])
  

  return (
    <div className={styles.vikingsContainer}>
      { allVikings?.map((el, i)=>{
          return(
            <SingleViking key={i} viking={el} />
          )
        })
      }
    </div>
  )
}
