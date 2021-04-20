import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const setAxiosHeader = ({ token }: { token: string }) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log('User is authenticated.');
  } else {
    console.log('Token is not available, user is not authenticated.');
  }
};

const setAxiosBaseUrl = () => {
  axios.defaults.baseURL = apiUrl;
};

const AxiosHelper = {
  setAxiosHeader,
  setAxiosBaseUrl,
};

export default AxiosHelper;
