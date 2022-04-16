import { carCollection } from "../../../cardb";
export default function handler(req, res) {
  const { userId } = req.query;
  const cars = carCollection[userId] || [];
  res.status(200).json(cars);
}
