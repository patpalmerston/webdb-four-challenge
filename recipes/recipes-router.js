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

router.get('/:id/steps', (req, res) => {
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
			res.status().json({ message: 'Failed to get step by step instructions' });
		});
});

module.exports = router;
