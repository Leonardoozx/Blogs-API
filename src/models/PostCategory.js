module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: { type: DataTypes.INTEGER, primaryKey: true },
      categoryId: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    }
  );
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      foreignKey: 'categoryId',
      through: PostCategory,
    });
  };
  return PostCategory;
};