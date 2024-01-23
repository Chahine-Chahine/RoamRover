
export const getRoomIdFromTrip = async (tripId, token) => {
    try {
        const response = await axios.get(`${baseUrl}:8000/api/trips/${tripId}`, {
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
