import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-node.herokuapp.com'
});

export default api;