const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const estimateItems = sequelizeClient.define('estimateItems', {
    discount: {
      type: DataTypes.TINYINT
    },
    price: {
      type: DataTypes.INTEGER
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  estimateItems.associate = function (models) {
    estimateItems.belongsTo(models.estimateItems, { as: 'estimate', through: 'estimateItems', targetKey: 'id', onDelete: 'NO ACTION'});
    estimateItems.belongsTo(models.estimateItems, { as: 'product', through: 'estimateItems', targetKey: 'id', onDelete: 'NO ACTION'});
  };

  return estimateItems;
};
