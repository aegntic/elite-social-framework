const express = require('express');
const path = require('path');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5001;

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'dist')));

// API Routes can be added here
// Example:
// app.get('/api/example', (req, res) => {
//   res.json({ message: 'API is working' });
// });

// For any request that doesn't match an API route, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
