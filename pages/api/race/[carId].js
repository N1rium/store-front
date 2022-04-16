import { getRace } from "../../../cardb";
export default function handler(req, res) {
  const { carId } = req.query;
  const race = getRace(carId);
  if (!race) {
    return res.status(500).json({ message: "No race found" });
  }
  res.status(200).json(race);
}
