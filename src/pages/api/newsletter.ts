import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "util/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, body } = req;
  const { db } = await connectToDatabase();

  if (method === "POST") {
    try {
      const email = await db
        .collection("emails")
        .insertOne({ ...body, timestamp: Date.now() });
      res.status(201).json(email);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
