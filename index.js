#! /usr/bin/env node

'use strict';

if ((require.main === module)) {
    global.debug = true;
}

var broker = require('./lib/broker');
var dialserver = require('./lib/dialserver');
var webserver = require('./lib/webserver');
var params = require('commander');
var logger = require('tracer').console({ level: global.debug ? 'log' : 'warn' });
require('colors');

var TAG = "DONGLETV ".green;
var pjson = require('./package.json');

params.command('version')
    .description('Display version')
    .action(function () {
        console.log("dongletv simulator version : " + pjson.version);
    });

params.command('start [env]')
    .description('Start service [broker|dialserver|webserver|all]')
    .action(function (cmd) {
        switch (cmd) {
            case 'broker':
                broker.init();
                break;
            case "dialserver":
                dialserver.init(null);
                break;
            case "webserver":
                webserver.init(null);
                break;
            case "all":
                dialserver.init(null);
                broker.init();
                webserver.init();
                break;
            default:
                logger.warn(TAG + "Unknown service <<<" + cmd + ">>>");
        }
    });

params.parse(process.argv);

exports.broker = broker;
exports.dialserver = dialserver;
exports.webserver = webserver;
