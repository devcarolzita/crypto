export const fetchImgs = async () => {
  const response = await fetch(
    'https://dog.ceo/api/breeds/image/random',
  );

  // if (!response.ok) {
  //   throw new Error(`Failed to fetch coordinate`);
  // }

  const data = await response.json();

  const imgUrl = data.message;
  const state = data.status;

  // const latitude = Number(coordinates.latitude.toFixed(4));
  // const longitude = Number(coordinates.longitude.toFixed(4));

  return { imgUrl, state };
};
