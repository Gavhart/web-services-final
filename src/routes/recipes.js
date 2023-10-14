const recipesController = require('../controllers/recipesController');
const express = require('express');
const router = express.Router();

// Import the controller functions
const {
    getAllRecipes,
    createRecipe,
    getRecipeById,
    updateRecipe,
    deleteRecipe
} = require('../controllers/recipesController');

// Define your routes here, like
router.get('/', getAllRecipes);
router.post('/', createRecipe);
router.get('/:id', getRecipeById);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;
