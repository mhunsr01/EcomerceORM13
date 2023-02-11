const { Product } = require('../models');

const productData = [
  {
    product_name: 'Spark PLugs',
    price: 6.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Spark Plug Wires',
    price: 15.99,
    stock: 8,
    category_id: 5,
  },
  {
    product_name: 'Distributor',
    price: 78.99,
    stock: 4,
    category_id: 4,
  },
  {
    product_name: 'Magneto',
    price: 12.99,
    stock: 15,
    category_id: 3,
  },
  {
    product_name: 'Battery',
    price: 129.99,
    stock: 15,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
