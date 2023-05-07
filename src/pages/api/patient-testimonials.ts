import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

const placesApi = google.maps.places;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;
  const response = await placesApi.textSearch({
    query: query as string,
    type: "establishment",
  });

  const results = response.data.results.map((result)
  return {
      name: result.name,
      rating: result.rating,
  }
});
res
}
