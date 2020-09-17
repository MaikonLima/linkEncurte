
exports.up = function(knex) {
    return knex.schema.createTable('link', function(table){
      table.increments('id').primary();
      table.string('hits').notNullable();
      table.string('url').notNullable();
      table.string('shortUrl').notNullable();
    });
  };
  exports.down = function(knex) {
      return knex.schema.dropTable('links');
  };
  
  exports.config = { transaction: false};