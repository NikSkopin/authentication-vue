import axios from 'axios';

export default {
  register(credentials) {
    return axios.post('/api/register', credentials);
  },
  login(credentials) {
    return axios.post('/api/login', credentials);
  },
};
