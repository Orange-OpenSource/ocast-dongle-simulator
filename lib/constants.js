/*jshint esversion: 6 */
/*
 Copyright 2017 Orange

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
/* jshint node: true */
/*jshint sub:true*/

const LOCALHOST = '127.0.0.1';
const path = require('path');

const DONGLE_IPADDRESS = process.env.DONGLE_IPADDRESS || LOCALHOST;
const WEBSOCKET_PORT = 4433;
const WEBSOCKET_PATH = "/ocast";
const ORANGECAST_NAMESPACE = "org.ocast.media";

const WEBSERVER_PORT = 8008;
const WEBSERVER_PATH = "/apps";
const WEBAPP_PORT = 8090;

var CURRENT_DIR = path.dirname(path.dirname(path.dirname(__dirname)));
try {
  CURRENT_DIR = path.dirname(path.dirname(require.resolve("ocast-sdk")));
}
catch (e) { }

const WEBAPP_PATH = CURRENT_DIR;

const DATASET = {
  "Orange-Sample-MediaReceiver": "https://orange-opensource.github.io/ocast-receiver-samples/MediaReceiver/",
  "Orange-Sample-MSEMediaReceiver": "https://orange-opensource.github.io/ocast-receiver-samples/MSEMediaReceiver/",
  "Orange-DEV2": "http://localhost:80"
};

exports.DONGLE_IPADDRESS = DONGLE_IPADDRESS;
exports.DATASET = DATASET;
exports.WEBSOCKET_PORT = WEBSOCKET_PORT;
exports.WEBSERVER_PORT = WEBSERVER_PORT;
exports.WEBSOCKET_PATH = WEBSOCKET_PATH;
exports.WEBSERVER_PATH = WEBSERVER_PATH;
exports.WEBAPP_PORT = WEBAPP_PORT;
exports.WEBAPP_PATH = WEBAPP_PATH;
exports.DEFAULT_APPLICATION = "Orange-DefaultReceiver-DEV";
exports.ORANGECAST_NAMESPACE = ORANGECAST_NAMESPACE;

