const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from Angular dist folder
app.use(express.static(path.join(__dirname, 'dist/restaurent-app'), {
  index: false // Don't serve index.html for static files
}));

// API routes (if you have any) would go here

// Handle ALL other routes by serving index.html (Angular SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/restaurent-app/index.html'));
});

app.listen(port, () => {
  console.log(`Angular app running on port ${port}`);
  console.log(`Serving from: ${path.join(__dirname, 'dist/restaurent-app')}`);
});
