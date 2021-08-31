// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// const { DELETE } = require('sequelize/types/lib/query-types');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE', 
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    // Need a way to id a product within the junction table
    foreignKey: 'product_id'
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    // Need a way to id a tag within the junction table
    foreignKey: 'tag_id'
  },
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
