// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  getYamlVikings,
  getJsonVikings,
  mapFromJsonVikingToViking,
  mapFromYamlVikingToViking,
} from "../../lib";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const yamlVikings = await getYamlVikings();
  const jsonVikings = await getJsonVikings();
  const vikings = [
    ...mapFromJsonVikingToViking(jsonVikings),
    ...mapFromYamlVikingToViking(yamlVikings),
  ];

  const filteredVikings = vikings.filter(
    (viking) => viking.age >= 25 && viking.age <= 65
  );

  res.status(200).json(filteredVikings);
}
