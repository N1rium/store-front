import { getCars } from "../../cardb";
export default async function handler(req, res) {
  res.status(200).json(getCars());
}
