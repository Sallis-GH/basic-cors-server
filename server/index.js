const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors({ origin: 'http://localhost:3000' }));

// Define your routes here

app.get('/', (req, res) => { 
  console.log('Request received');
  console.table({origin: req.headers.origin});
  res.send('Hello World');
})

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});