// Import required modules
const express = require('express');

// Create an Express application
const app = express();

const mongoDB = require("./db")


mongoDB();
// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use(express.json())
app.use('/api/', require("./Routes/CreateUser"));

// Set the port for the server to listen on
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});