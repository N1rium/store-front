// Quick lookup table where keys are metamask ids that returns a car collection
export const carCollection = {
  "0x21F44b4C7D694789212e6ED5dF2b8DBB96ce2eCa": [
    {
      nft_id: "some_random_nft_id",
      fuel: 100,
      body: "saturn",
      paintJob: "camo_beige",
      rim: "blade",
      frame: "novice",
    },
    {
      nft_id: "another_damn_nft_id",
      fuel: 50,
      body: "farmer",
      paintJob: "cubes",
      rim: "plate",
      frame: "expert",
    },
  ],
};

const getCars = () =>
  Object.keys(carCollection).reduce(
    (acc, user) => [...acc, ...carCollection[user]],
    []
  );

const getCar = (carId) => getCars().find((c) => c.nft_id == carId);

const getRandomCars = (amount = 1) => {
  const cars = getCars();
  const res = [];
  for (let i = 0; i < amount; i++) {
    res.push(cars[Math.floor(Math.random() * cars.length)]);
  }
  return res;
};

export const getRace = (carId) => {
  const car = getCar(carId);

  if (!car) {
    return null;
  }

  const opponents = getRandomCars(4);
  const cars = shuffleArray([car, ...opponents]);

  return cars.map((c, i) => ({
    ...c,
    rank: i + 1,
  }));
};

const shuffleArray = (input) => {
  const array = [...input];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
