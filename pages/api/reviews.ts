import { NextApiHandler } from 'next';

const place_id = 'ChIJmWgqXhF9yUAR94EVpkRvQQI';
// const place_id = 'ChIJyUZsn3Z9yUARF6vxs_NUWEI'; // example
const fields = 'rating,user_ratings_total'; // reviews,rating,user_ratings_total
const key = 'AIzaSyBLklbi_hugNCXEkiEG9j_TF7QFmLH46gU';

const handler: NextApiHandler = async (req, res) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=${fields}&key=${key}`
    );
    const data = await response.json();

    res.status(200).send(data?.result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export default handler;
