import type { NextApiRequest, NextApiResponse } from "next";
import { Viking } from "../../types/viking";
import { handleVikingList } from "../../lib/vikings";
import vikingsJSON from "../../vikings.json";
import vikingsYAML from "../../vikings.yaml";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Viking>>
) {
  const vikingList = handleVikingList(vikingsJSON, vikingsYAML);
  res.status(200).json(vikingList);
}
