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
function getShoppingList(recipe_id) {
  console.log('getShoppingList')
}

//should return a list of step by step instructions for preparing a recipe
function getInstructions(id) {
 
  return db('steps as s')
    .join('recipes as r', 'r.id', 's.recipe_id')
    .select('s.id', 'r.recipe_name', 's.step_number', 's.instructions')
    .where('s.recipe_id', id)
}