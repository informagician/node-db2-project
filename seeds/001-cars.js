
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      const cars = [
        {
          vin: 'abcd123456789',
          make: 'Hyundai',
          model: 'Tucson',
          mileage: 143232,
          title: 'clean'
        },
        {
          vin: 'abcdefg456789',
          make: 'Honda',
          model: 'Civic',
          mileage: 19,
          title: 'clean'
        },
        {
          vin: '123abc3456789',
          make: 'Mercedes Benz',
          model: 'C 320',
          mileage: 23456,
          title: 'salvage'
        }
      ]
      // Inserts seed entries
      return knex('cars').insert(cars);
    });
};
