const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

router.get('/', (req, res) => {
	Recipes.getRecipes()
		.then(recipes => {
			res.json(recipes);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ message: 'Failed to get recipes' });
		});
});

router.get('/:id/shoppingList', (req, res) => {
	const { id } = req.params;

	Recipes.getShoppingList(id)
		.then(list => {
      console.log(list)
			if (list) {
				res.json(list);
			} else {
				res
					.status(404)
					.json({ message: 'Could not find shopping list for Recipe' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get step by step shopping list' });
		});
});

router.get('/:id/instructions', (req, res) => {
	const { id } = req.params;

	Recipes.getInstructions(id)
		.then(steps => {
			if (steps) {
				res.json(steps);
			} else {
				res
					.status(404)
					.json({ message: 'Could not find Instructions for Recipe' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get step by step instructions' });
		});
});

module.exports = router;
