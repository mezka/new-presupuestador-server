const users = require('./users/users.service.js');
const clients = require('./clients/clients.service.js');
const estimates = require('./estimates/estimates.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(clients);
  app.configure(estimates);
};
