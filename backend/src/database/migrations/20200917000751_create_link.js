
exports.up = function(knex) {
  return knex.schema.createTable('links', function (table){
    table.string('id').primary();
    table.string('hits').notNullable();
    table.string('url').notNullable();
    table.string('shortUrl').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('links');
};
