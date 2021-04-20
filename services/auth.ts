import axios, { AxiosResponse } from 'axios';

const signin = (payload: {
  username: string;
  password: string;
}): Promise<AxiosResponse> => {
  return axios.post('/auth/login/vendor', payload);
};

const AuthService = {
  signin,
};

export default AuthService;
