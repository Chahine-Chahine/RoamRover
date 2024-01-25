import axios from 'axios';
import { baseUrl } from './baseUrl';

export const getRoomIdFromTrip = async (tripId, token) => {
    try {
        const response = await axios.get(`${baseUrl}/api/trips/${tripId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const tripData = response.data;
        return tripData.room_id; 
    } catch (error) {
        console.error("Error fetching trip data:", error);
        return null; 
    }
}
