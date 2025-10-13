const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// CORRECT PATH: dist/RestaurentApp (capital R, capital A)
app.use(express.static(path.join(__dirname, 'dist/RestaurentApp')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/RestaurentApp/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
