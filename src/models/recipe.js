const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    // Add other fields as necessary
});

module.exports = mongoose.model('Recipe', RecipeSchema);
