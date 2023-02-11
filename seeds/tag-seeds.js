const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Chevrolet',
  },
  {
    tag_name: 'Ford',
  },
  {
    tag_name: 'Dodge',
  },
  {
    tag_name: 'Toyota',
  },
  {
    tag_name: 'Mazda',
  },
  {
    tag_name: 'Mercury',
  },
  {
    tag_name: 'Plymouth',
  },
  {
    tag_name: 'Cadilac',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
