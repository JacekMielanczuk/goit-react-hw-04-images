import axios from 'axios';

async function getPicturesData(keyWord, page) {
  const API_KEY = '34553152-a235b05379e570f3f59cfa240';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: keyWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });

  return await axios.get(`https://pixabay.com/api/?${searchParams}`);
}

export default getPicturesData;
