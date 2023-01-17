// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import ValidateMergeYamlJsonData from "../../lib/vikings";

export default function getVikings(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json(ValidateMergeYamlJsonData);
  } catch (err: unknown) {
    if (typeof err === "string") {
      res.status(500).json({ message: err });
    } else {
      res.status(500).json({ message: "An error occurred" });
    }
  }
}
