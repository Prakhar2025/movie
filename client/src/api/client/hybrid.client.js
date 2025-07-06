import axios from "axios";
import queryString from "query-string";

// Use local server for user-related features (auth, favorites, reviews)
const localBaseURL = "http://localhost:5000/api/v1/";
// Use developer's server for movie data (TMDB API calls)
const remoteBaseURL = "https://bertflix-api.vercel.app/api/v1/";

const createClient = (baseURL) => {
  const client = axios.create({
    baseURL,
    paramsSerializer: {
      encode: params => queryString.stringify(params)
    }
  });

  client.interceptors.request.use(async config => {
    return {
      ...config,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("actkn")}`
      }
    };
  });

  client.interceptors.response.use((response) => {
    if (response && response.data) return response.data;
    return response;
  }, (err) => {
    throw err.response.data;
  });

  return client;
};

// Local client for user features
export const localPrivateClient = createClient(localBaseURL);
// Remote client for movie data
export const remotePrivateClient = createClient(remoteBaseURL);

// Default export uses local for now
export default localPrivateClient;
