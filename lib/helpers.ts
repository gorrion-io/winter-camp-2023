import { Weapon } from '@/types'
import * as fs from 'fs'
import yaml from 'js-yaml'

export const getRandomInt = (max: number): number => Math.floor(Math.random() * max)

export const getWeapon = (weapons: Weapon[]): Weapon => weapons[getRandomInt(weapons.length)]

export const readYamlData = async (yamlDataDir: string): Promise<[]> => {
  const rawYaml = fs.readFileSync(yamlDataDir, 'utf-8')
  const data = yaml.load(rawYaml) as []
  return data
}
