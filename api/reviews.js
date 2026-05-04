export default async function handler(req, res) {
  const PLACE_ID = 'ChIJXVIhV4jvGRMRmfQSgMT';
  const API_KEY  = 'AIzaSyAyuIp5zbqI6VR_HX9UStdGTGVgNXR9TGo';

  const url = 'https://maps.googleapis.com/maps/api/place/details/json'
    + '?place_id=' + PLACE_ID
    + '&fields=name,rating,user_ratings_total,reviews'
    + '&language=it'
    + '&reviews_sort=newest'
    + '&key=' + API_KEY;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=3600');
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}