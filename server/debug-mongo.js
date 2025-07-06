// Debug script to check MongoDB connection and collections
import mongoose from "mongoose";
import "dotenv/config";

console.log("=== MongoDB Debug Information ===");
console.log("MONGODB_URL from .env:", process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL).then(async () => {
  console.log("✅ MongoDB connected successfully");
  console.log("📍 Connected to database:", mongoose.connection.db.databaseName);
  console.log("🔗 Connection host:", mongoose.connection.host);
  console.log("🚪 Connection port:", mongoose.connection.port);
  
  // List all collections
  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log("📊 Collections in database:");
  if (collections.length === 0) {
    console.log("   ⚠️  No collections found - database might be empty");
  } else {
    collections.forEach(collection => {
      console.log(`   - ${collection.name}`);
    });
  }
  
  // Check if users collection exists and has data
  try {
    const userCount = await mongoose.connection.db.collection('users').countDocuments();
    console.log(`👥 Users collection document count: ${userCount}`);
  } catch (error) {
    console.log("❌ Error checking users collection:", error.message);
  }
  
  mongoose.disconnect();
  console.log("🔌 Disconnected from MongoDB");
}).catch((err) => {
  console.log("❌ MongoDB connection error:", err);
  process.exit(1);
});
