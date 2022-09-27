module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'blog_posts',
    }
  );
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    BlogPosts.hasMany(models.PostCategory, {
      foreignKey: 'postId',
      as: 'posts',
    });
  };
  return BlogPosts;
};
