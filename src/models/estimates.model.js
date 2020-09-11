// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const estimates = sequelizeClient.define('estimates', {
    taxpercent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  estimates.associate = function (models) {
    estimates.belongsTo(models.estimates, { as: 'client', through: 'estimates', targetKey: 'id', onDelete: 'NO ACTION'});
  };

  return estimates;
};
