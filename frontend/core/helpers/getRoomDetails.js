import axios from 'axios';
import { baseUrl } from './baseUrl';

const getRoomDetails = async (roomId, token) => {
    try {
        const response = await axios.get(`${baseUrl}/api/rooms/${roomId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        console.log(`the roomId in getRoomDetails: ${roomId}`, token);
        return response.data; 
    } catch (error) {
        console.error('Error fetching room details:', error);
        return null; 
    }
};

export default getRoomDetails;
