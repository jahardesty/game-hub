import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '9a9d4b89f6984de49b41050537423f7f',
  },
});
