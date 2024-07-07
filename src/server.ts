// server.ts
import app from './app';
import connectDB from './db';

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB().then(() => {
  // Start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});
