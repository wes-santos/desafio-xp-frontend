import axios from 'axios';

const api = axios.create({
  baseURL: 'https://desafio-xp-backend.herokuapp.com',
});

export default api;
