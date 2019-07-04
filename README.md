# ocast-dongle-simulator
## Usages
> * Simulate the Ocast Dongle (support DIAL, WebSocket server, Route messages)
## Prerequisites
install node package manager for Windows/Linux/MacOs

1. Download the Windows installer from the Nodes.js® web site.
https://nodejs.org/download/

2. Run the installer (the .msi or .pkg file you downloaded in the previous step.)

3. Follow the prompts in the installer

4. Test Node. To see if Node is installed, open the Windows Command Prompt and type node -v

***

### License

All code in this repository is covered by the [Apache-2.0 license](http://www.apache.org/licenses/LICENSE-2.0). See LICENSE file for copyright details.

## Installation
`npm install`

## Configuration
Edit `constants.js`  your configuration

### Start server for localhost
#### Somes/All services
`npm run command start` **[broker|dialserver|webserver|all]**

### AppId
`npm run command start` **appId**

### Start the server for localhost

`npm run command stop` **appId**

### Then
 1. load the URL in the browser
 2. send command via the ocast-dongle-controller or via your sender app