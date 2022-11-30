module.exports = (sequelize, Sequelize) => {
  const productSchema = sequelize.define("Products", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_by: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM("In Stock", "Out of Stock"),
      defaultValue: "In Stock",
    },

    createdAt: {
      field: "created_at",
      type: Sequelize.DATE,
      defaultValue: sequelize.fn("NOW"),
      allowNull: false,
    },
    updatedAt: {
      field: "updated_at",
      type: Sequelize.DATE,
      defaultValue: sequelize.fn("NOW"),
      allowNull: false,
    },
  });
  return productSchema;
};
