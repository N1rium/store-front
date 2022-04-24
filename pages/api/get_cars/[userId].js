import { carCollection } from "../../../cardb";
export default async function handler(req, res) {
  //await new Promise((r) => setTimeout(r, 5000));
  const { userId } = req.query;
  const cars = carCollection[userId] || [];
  res.status(200).json(cars);
}
