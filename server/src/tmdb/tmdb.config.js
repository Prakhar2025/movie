const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

const getUrl = (endpoint, params) => {
  if (!baseUrl || !key) {
    throw new Error(`TMDB configuration missing - baseUrl: ${baseUrl}, key: ${key ? 'present' : 'missing'}`);
  }
  
  const qs = new URLSearchParams(params);
  const url = `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
  
  console.log('Generated TMDB URL:', url); // Debug log
  return url;
};

export default { getUrl };