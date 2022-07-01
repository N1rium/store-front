import { carCollection } from "../../../cardb";
export default async function handler(req, res) {
  const { userId } = req.query;
  const cars = carCollection[userId.toLowerCase()] || [];
  const withFakeFuel = cars.map((car) => ({
    ...car,
    fuel: Math.random() * 100,
  }));
  res.status(200).json(cars);
}
