const express = require("express");
const router = express.Router();
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from '.././webpack.config.js';

router.use(express.static(__dirname + "/../static"));

const compiler = webpack(config);

router.use(webpackMiddleware(compiler);

module.exports = router;