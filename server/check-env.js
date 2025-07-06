// Simple test to verify environment variables are loaded
import "dotenv/config";

console.log("=== Environment Variables Check ===");
console.log("MONGODB_URL:", process.env.MONGODB_URL ? "✅ Loaded" : "❌ Missing");
console.log("TMDB_BASE_URL:", process.env.TMDB_BASE_URL ? "✅ Loaded" : "❌ Missing");
console.log("TMDB_KEY:", process.env.TMDB_KEY ? "✅ Loaded" : "❌ Missing");
console.log("PORT:", process.env.PORT ? "✅ Loaded" : "❌ Missing");

console.log("\n=== Actual Values ===");
console.log("TMDB_BASE_URL:", process.env.TMDB_BASE_URL);
console.log("TMDB_KEY:", process.env.TMDB_KEY);
