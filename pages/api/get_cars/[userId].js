import cardb from "../../../cardb";
export default function handler(req, res) {
  const { userId } = req.query;
  const carCollection = cardb[userId];
  res.status(200).json(carCollection);
}
