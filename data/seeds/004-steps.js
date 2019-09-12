exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('steps')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('steps').insert([
				{
					recipe_id: 1,
					ingredient_id: 1,
					quantity: 8.2,
					step_number: 1,
					instructions: 'melt 8.2 oz of cheese in pot'
				},
				{
					recipe_id: 1,
					ingredient_id: 2,
					quantity: 2,
					step_number: 2,
					instructions: 'boil noodles'
				},
				{
					recipe_id: 1,
					step_number: 2,
					instructions: 'mix cheese and noodles'
				},
				{
					recipe_id: 2,
					ingredient_id: 3,
					quantity: 0.5,
					step_number: 1,
					instructions: 'add .5 oz of lemon juice to container'
				},
				{
					recipe_id: 2,
					ingredient_id: 4,
					quantity: 1,
					step_number: 2,
					instructions: 'add 1 pound of Chicken to container'
				},
				{
					recipe_id: 2,
					ingredient_id: 5,
					quantity: 0.5,
					step_number: 3,
					instructions: 'add .5 cup of Feta to container'
				},
				{
					recipe_id: 2,
					step_number: 4,
					instructions: 'Bake in Oven to 400 degrees for 20 minutes'
				},
				{
					recipe_id: 3,
					ingredient_id: 6,
					quantity: 1,
					step_number: 1,
					instructions: 'add 1 cup of Cream Cheese to container'
				},
				{
					recipe_id: 3,
					ingredient_id: 7,
					quantity: 1,
					step_number: 2,
					instructions: 'add 1 cup of Mayo to container'
				},
				{
					recipe_id: 3,
					ingredient_id: 8,
					quantity: 5,
					step_number: 3,
					instructions: 'add 5 cloves of garlic to container'
				},
				{
					recipe_id: 3,
					ingredient_id: 9,
					quantity: 0.25,
					step_number: 4,
					instructions:
						'add .25 cups of green onions to container and mix till blended'
				},
				{
					recipe_id: 4,
					ingredient_id: 10,
					quantity: 2,
					step_number: 1,
					instructions: 'add 2 pounds of turkey meat to bowl'
				},
				{
					recipe_id: 4,
					ingredient_id: 11,
					quantity: 2.5,
					step_number: 2,
					instructions: 'add 2.5 pounds of ground beef to bowl'
				},
				{
					recipe_id: 4,
					ingredient_id: 12,
					quantity: 1,
					step_number: 3,
					instructions: 'add 1 pounds of italian sausage to bowl'
				},
				{
					recipe_id: 4,
					ingredient_id: 13,
					quantity: 2,
					step_number: 4,
					instructions: 'add 2 cups of bread crumbs to bowl'
				},
				{
					recipe_id: 4,
					ingredient_id: 13,
					quantity: 2,
					step_number: 4,
					instructions: 'add 2 cups of bread crumbs to bowl'
				},
				{
					recipe_id: 4,
					step_number: 5,
					instructions:
						'roll into balls, place on cookie sheet, bake 25 min 400 degrees'
				}
			]);
		});
};
