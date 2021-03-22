import axios, { AxiosRequestConfig } from 'axios';
import { backendBaseUrl } from './APIs';
import { LoginForm, LoginAPIResponse } from './interfaces';
import { getAuthToken } from './localStore';
/** ================================================================================== */
/**
for login
*/

export const onLogin = async (data: LoginForm) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: backendBaseUrl + 'users/login',
    data,
  };

  try {
    //tra ve data voi form la LoginAPIResponse>
    const { data: response } = await axios.request<LoginAPIResponse>(requestConfig);
    storeToken(response.encode);
    return { encode: response.encode };
  } catch (e) {
    console.error(e.response);
    return { error: e.response.message };
  }
};

export const TOKEN_KEY = 'news_token_key';

const storeToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
