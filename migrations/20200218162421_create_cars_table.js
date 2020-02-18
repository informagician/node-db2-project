
exports.up = function(knex) {
  return knex.schema.createTable('cars',tbl => {
      tbl.increments();
      tbl
      .string('vin', 32)
      .notNullable()
      .index()
      .unique()
      tbl
      .string('make', 64)
      .notNullable()
      .index()
      tbl
      .string('model', 64)
      .notNullable()
      tbl
      .integer('mileage', 8)
      .notNullable()
      tbl
      .string('title', 16)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
