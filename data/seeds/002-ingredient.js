exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('ingredients')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('ingredients').insert([
				{ ingredient_name: 'cheese' }, // 1
				{ ingredient_name: 'noodles' }, // 2
				{ ingredient_name: 'lemon juice' }, // 3
				{ ingredient_name: 'chicken' }, // 4
				{ ingredient_name: 'feta' }, // 5
				{ ingredient_name: 'cream cheese' }, // 6
				{ ingredient_name: 'mayo' }, // 7
				{ ingredient_name: 'garlic' }, // 8
				{ ingredient_name: 'green onion' }, // 9
				{ ingredient_name: 'turkey meat' }, // 10
				{ ingredient_name: 'ground beef' }, // 11
				{ ingredient_name: 'italian sausage' }, // 12
				{ ingredient_name: 'bread crumbs' } // 13
			]);
		});
};
