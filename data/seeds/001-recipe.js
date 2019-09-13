exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('recipes')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('recipes').insert([
				{ recipe_name: 'mac and cheese' }, // 1
				{ recipe_name: 'garlic dip' }, // 2
				{ recipe_name: 'lemon chicken' }, // 3
				{ recipe_name: 'meatballs' } // 4
			]);
		});
};
