// Test TMDB API connection
import axios from "axios";
import "dotenv/config";

console.log("=== TMDB API Test ===");
console.log("TMDB_BASE_URL:", process.env.TMDB_BASE_URL);
console.log("TMDB_KEY:", process.env.TMDB_KEY);

const testUrl = `${process.env.TMDB_BASE_URL}/movie/popular?api_key=${process.env.TMDB_KEY}`;
console.log("Test URL:", testUrl);

try {
  const response = await axios.get(testUrl);
  console.log("✅ TMDB API working!");
  console.log("📽️ Sample movies fetched:", response.data.results?.length || 0);
  console.log("🎬 First movie:", response.data.results?.[0]?.title || "No movies");
} catch (error) {
  console.log("❌ TMDB API Error:");
  console.log("Status:", error.response?.status);
  console.log("Status Text:", error.response?.statusText);
  console.log("Error Message:", error.message);
  console.log("Error Data:", error.response?.data);
}
