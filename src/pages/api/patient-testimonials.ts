import { PatientTestimonials } from "./../../types/testimonial-interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

const placesApi = google.maps.places;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PatientTestimonials[]>
) {
  const { query } = req.query;
  const response = await placesApi.textSearch({
    query: query as string,
    type: "establishment",
  });
  const results: PatientTestimonials[] = response.data.results.map(
    (result: any) => {
      return {
        authorName: result.name,
        rating: result.rating,
        text: result.text,
      };
    }
  );
  res.status(200).json(results);
}
