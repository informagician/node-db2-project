
exports.up = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.string('transmission', 8)
  })
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.dropColumn('transmission')
  })
};
