# ocast-dongle-simulator

The ocast-dongle-simulator can be used to simulate a dongle TV compatible with [OCast SDK](https://github.com/Orange-OpenSource/OCast-JS), in order to handle:
- DIAL support
- WebSocker server
- messages routing wo receiver web application


## Prerequisites

[Nodes.js®](https://nodejs.org/en/)

---

### License

All code in this repository is covered by the [Apache-2.0 license](http://www.apache.org/licenses/LICENSE-2.0). See LICENSE file for copyright details.

## Installation

`npm install -g`

## Configuration

Edit `constants.js` to setup your configuration, such as applications data set.

### Start server for localhost

#### Somes/All services

    dongletv start [broker|dialserver|webserver|all]

### Test you receiver web application

 1. load your receiver web application in any browser
 2. send commands using the [ocast-dongle-controller](https://github.com/Orange-OpenSource/ocast-dongle-controller) or using your sender app