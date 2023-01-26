import type { NextApiRequest, NextApiResponse } from 'next';
import { getVikings } from '../../lib/vikings';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vikings = getVikings();
  res.status(200).json({ vikings });
}
