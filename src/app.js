const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const recipeRoutes = require('./routes/recipes');

// Load environment variables from .env file
require('dotenv').config();

// Create an Express application
const app = express();

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Middleware to parse json
app.use(express.json());

// Set up routes for recipes
app.use('/api/recipes', recipeRoutes);

// Load Swagger documentation
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger_output.json'));

// Serve Swagger documentation on "/api-docs" endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Define the PORT
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // Export your app for testing purposes
