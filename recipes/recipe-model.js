const db = require('../data/dbConfig')

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
}

function getRecipes() {
  return db('recipes')
}

//should return a list of all ingredients and quantities for a given recipe
function getShoppingList(id) {
  return db('recipe_ingredients as ri')
    .join('recipes as r', 'r.id', 'ri.recipe_id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .select('ri.id', 'r.recipe_name', 'i.ingredient_name', 'ri.quantity')
    .where('ri.recipe_id', id)
}

//should return a list of step by step instructions for preparing a recipe
function getInstructions(id) {
 
  return db('steps as s')
    .join('recipes as r', 'r.id', 's.recipe_id')
    .select('s.id', 'r.recipe_name', 's.step_number', 's.instructions')
    .where('s.recipe_id', id)
}