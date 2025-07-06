// Quick debug script to test server's access to TMDB
import tmdbApi from "./src/tmdb/tmdb.api.js";
import "dotenv/config";

console.log("=== Server TMDB Debug ===");
console.log("ENV loaded - TMDB_KEY:", process.env.TMDB_KEY ? "✅ Found" : "❌ Missing");
console.log("ENV loaded - TMDB_BASE_URL:", process.env.TMDB_BASE_URL ? "✅ Found" : "❌ Missing");

try {
  console.log("Testing tmdbApi.mediaList...");
  const response = await tmdbApi.mediaList({ 
    mediaType: "movie", 
    mediaCategory: "popular", 
    page: 1 
  });
  console.log("✅ TMDB API working through server!");
  console.log("Movies found:", response?.results?.length || 0);
} catch (error) {
  console.log("❌ Server TMDB Error:");
  console.log("Error:", error.message);
  console.log("Stack:", error.stack);
}
