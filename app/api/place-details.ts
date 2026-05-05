import axios from "axios";

export default async function handler(req :any, res :any) {
    const { placeId } = req.query;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Use the API key from environment variables
    
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;
    
    try {
      const response = await axios.get(url);
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }