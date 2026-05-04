export const config = { runtime: 'edge' };

export default async function handler(req) {
  const PLACE_ID = 'ChIJXVIhV4jvGRMRmfQSgMT';
  const API_KEY  = 'AIzaSyAyuIp5zbqI6VR_HX9UStdGTGVgNXR9TGo';

  const url = `https://maps.googleapis.com/maps/api/place/details/json`
    + `?place_id=${PLACE_ID}`
    + `&fields=name,rating,user_ratings_total,reviews`
    + `&language=it`
    + `&reviews_sort=newest`
    + `&key=${API_KEY}`;

  try {
    const res  = await fetch(url);
    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 's-maxage=3600', // cache 1 ora
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
