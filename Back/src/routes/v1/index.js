const express = require('express');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const statusRoute = require('./status.route');
const sensorsRoute = require('./sensors.route');
const dataRoute = require('./data.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/status',
    route: statusRoute,
  },
  {
    path: '/sensors',
    route: sensorsRoute,
  },
  {
    path: '/data',
    route: dataRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
