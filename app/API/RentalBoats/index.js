import axios from 'axios';

export const getRentalBoats = async () => {
  try {
    const response = await axios.get(
      `https://api.dubaiboating.com/public/api/boats/rental-boats`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching rental boats data:', error);
    throw error;
  }
};
