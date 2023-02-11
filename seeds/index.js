const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DB Sync Complete -----\n');
  await seedCategories();
  console.log('\n----- Cat Seed Complete -----\n');

  await seedProducts();
  console.log('\n----- Prod Seed Complete -----\n');

  await seedTags();
  console.log('\n----- Tag Seed Complete -----\n');

  await seedProductTags();
  console.log('\n----- Prod Tag Seed Complete -----\n');

  process.exit(0);
};

seedAll();
