import type { NextApiRequest, NextApiResponse } from 'next'
import type { Vikings, JsonVikings, YamlVikings } from '@/types'
import { getJsonVikings, getYamlVikings, mergeVikings } from '@/lib'

type Data = Vikings

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const jsonVikings: JsonVikings = getJsonVikings()
  const yamlVikings: YamlVikings = await getYamlVikings()
  const vikings = mergeVikings(jsonVikings, yamlVikings)
  res.status(200).json(vikings)
}

export default handler
