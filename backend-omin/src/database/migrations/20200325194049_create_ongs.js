
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('wpp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

// Desfaz o erro da tabela metodo UP
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
