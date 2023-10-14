const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Recipe Sharing Platform API",
        description: "This is the API documentation for the Recipe Sharing Platform."
    },
    host: "localhost:5000",
    schemes: ['http']
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./app.js'];  // Adjusted path

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./app')  // Adjusted path
});


