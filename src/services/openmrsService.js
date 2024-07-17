import axios from 'axios';

const API_URL = 'http://localhost:80/openmrs/ws/rest/v1/patient';

export const getPatients = async (page, searchQuery) => {
  try {
    const response = await axios.get(API_URL, {
      params: { q: searchQuery, startIndex: page * 10, limit: 10 }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching patients:', error);
    return [];
  }
};