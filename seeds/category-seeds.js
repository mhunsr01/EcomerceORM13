const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Electric',
  },
  {
    category_name: 'Interior',
  },
  {
    category_name: 'Engine',
  },
  {
    category_name: 'Driveline',
  },
  {
    category_name: 'Exterior',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
