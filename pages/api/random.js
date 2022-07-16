import { getRandomCars } from "../../cardb";
export default async function handler(req, res) {
  const { amount = 10 } = req.query;
  res.status(200).json(
    getRandomCars(amount).map((car, i) => ({
      ...car,
      nft_id: i,
    }))
  );
}
