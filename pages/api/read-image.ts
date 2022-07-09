// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { NT } from "@/constants";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { src } = req.query;
  const options: any = {
    responseType: "stream",
    headers: {
      referer: String(NT),
    },
  };
  const response = await axios.get(String(src), options);
  response.data.pipe(res);
};
export default handler;
