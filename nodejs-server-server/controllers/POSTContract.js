'use strict';

var url = require('url');

var POSTContract = require('./POSTContractService');

module.exports.createContract = function createContract (req, res, next) {
  POSTContract.createContract(req.swagger.params, res, next);
};
