export const bodies = [
  "breeze",
  "wind",
  "bolt",
  "hurricane",
  "raptor",
  "stallion",
  "hammerhead",
  "rhino",
  "farmer",
  "mechanic",
  "hunter",
  "executioner",
  "pluto",
  "neptune",
  "venus",
  "saturn",
  "cruiser",
  "rocket",
  "stinger",
  "tomahawk",
];

export const paintJobs = [
  "yellow",
  "red",
  "green",
  "pink",
  "black",
  "yb_stripes",
  "wp_stripes",
  "bp_stripes",
  "gg_stripes",
  "pb_stripes",
  "camo_beige",
  "camo_green",
  "zebra",
  "leopard",
  "rip_and_tear",
  "flames",
  "tiger",
  "cubes",
  "hippie",
  "turtle",
  "yellow_stain",
];

export const rims = [
  "plate",
  "sturdy",
  "vent",
  "blade",
  "titan",
  "thor",
  "spyder",
  "razor",
];

// Quick lookup table where keys are metamask ids that returns a car collection
export const carCollection = {
  "0x21F44b4C7D694789212e6ED5dF2b8DBB96ce2eCa": [
    {
      nft_id: "1",
      fuel: 75,
      body: "saturn",
      paintJob: "camo_beige",
      rim: "blade",
      frame: "novice",
    },
    {
      nft_id: "2",
      fuel: 35,
      body: "farmer",
      paintJob: "cubes",
      rim: "plate",
      frame: "expert",
    },
    {
      nft_id: "3",
      fuel: 50,
      body: "hurricane",
      paintJob: "zebra",
      rim: "razor",
      frame: "master",
    },
  ],
  test: [
    {
      nft_id: "4",
      fuel: 50,
      body: "stallion",
      paintJob: "yb_stripes",
      rim: "thor",
      frame: "master",
    },
    {
      nft_id: "5",
      fuel: 50,
      body: "stallion",
      paintJob: "yb_stripes",
      rim: "thor",
      frame: "master",
    },
    {
      nft_id: "6",
      fuel: 50,
      body: "executioner",
      paintJob: "rip_and_tear",
      rim: "blade",
      frame: "master",
    },
    {
      nft_id: "7",
      fuel: 50,
      body: "pluto",
      paintJob: "gg_stripes",
      rim: "blade",
      frame: "master",
    },

    {
      nft_id: "8",
      fuel: 50,
      body: "bolt",
      paintJob: "black",
      rim: "spyder",
      frame: "master",
    },
  ],
};

export const getCars = () =>
  Object.keys(carCollection).reduce(
    (acc, user) => [...acc, ...carCollection[user]],
    []
  );

export const getCar = (carId) => getCars().find((c) => c.nft_id == carId);

export const getRandomCars = (amount = 1) => {
  const res = [];
  for (let i = 0; i < amount; i++) {
    res.push(getRandomCar());
  }
  return res;
};

export const getRandomCar = () => ({
  body: bodies[Math.floor(Math.random() * bodies.length)],
  paintJob: paintJobs[Math.floor(Math.random() * paintJobs.length)],
  rim: rims[Math.floor(Math.random() * rims.length)],
  frame: "novice",
});

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
