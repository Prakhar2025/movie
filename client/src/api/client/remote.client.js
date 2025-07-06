import axios from "axios";
import queryString from "query-string";

// Remote server for movie data (has working TMDB API)
const remoteBaseURL = "https://bertflix-api.vercel.app/api/v1/";

const remoteClient = axios.create({
  baseURL: remoteBaseURL,
  paramsSerializer: {
    encode: params => queryString.stringify(params)
  }
});

remoteClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json"
    }
  };
});

remoteClient.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
  return response;
}, (err) => {
  throw err.response.data;
});

export default remoteClient;
