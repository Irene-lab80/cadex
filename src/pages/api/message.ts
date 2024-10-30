import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  response: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log("data", req.body);
    res.status(200).json({
      response: `Thank you for your interest, ${req.body.name}`,
    });
  }
}
