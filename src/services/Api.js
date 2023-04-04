import axios from 'axios';

const API_KEY = '33610630-2a97c8dcb0ceace6d1188471d';
const BASE_URL = 'https://pixabay.com/api/?';

export const fetchImage = async (querySearch, page) => {
  const response = await axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: querySearch,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
      page,
    },
  });

  return response.data;
};
