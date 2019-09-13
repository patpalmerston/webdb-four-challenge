exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('recipes', tbl => {
			tbl.increments();

			tbl
				.string('recipe_name', 128)
				.notNullable()
				.unique();
		})
		.createTable('ingredients', tbl => {
			tbl.increments();

			tbl
				.string('ingredient_name', 128)
				.notNullable()
				.unique();
		})
		.createTable('recipe_ingredients', tbl => {
			tbl.increments()

			tbl
				.integer('recipe_id')
				.unsigned()
				.references('id')
				.inTable('recipes')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');

			tbl
				.integer('ingredient_id')
				.unsigned()
				.references('id')
				.inTable('ingredients')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');

			tbl
				.float('quantity')
				.notNullable()
				.unsigned();

			tbl.unique(['recipe_id', 'ingredient_id'])
		})
		.createTable('steps', tbl => {
			tbl.increments();

			tbl
				.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('recipes')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');


			tbl
				.integer('step_number')
				.unsigned()
				.notNullable();

			tbl.text('instructions').notNullable();
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTableIfExists('steps')
		.dropTableIfExists('recipe_ingredients')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes');
};
