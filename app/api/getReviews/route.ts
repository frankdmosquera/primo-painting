import axios from "axios";

export async function GET(req: any) {
  try {
    const url =
      "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJT0simD93cVMRNkpXzYqRErA&key=AIzaSyAcrdM_5INpow0gBF6rQ-C7E6Bj6aNl288";

    const response = await axios.get(url);
    const placeDetails = response.data.result;

    if (placeDetails?.reviews) {
      console.log("Place with 5-star rating:", placeDetails?.reviews);
      return new Response(JSON.stringify({ data: placeDetails?.reviews }), {
        status: 200,
      });
    } else {
      return new Response(
        JSON.stringify({ message: "No reviews found!" }),
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to get reviews. Try again later." }),
      { status: 500 }
    );
  }
}
