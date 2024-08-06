import axios from 'axios';

const LOCAL_URL = '/accordionData.json';

export const fetchData = async () => {
    try {
      const response = await axios.get(LOCAL_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
};