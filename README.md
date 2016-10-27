# RoboHydra Mock Server

This is a HTTP mocking server based on [RoboHydra](RoboHydra) framework.

[![npm](https://img.shields.io/npm/v/@generalov/robohydra-mock-server.svg)](https://www.npmjs.com/package/@generalov/robohydra-mock-server)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/generalov/robohydra-mock-server/master/LICENSE)
[![Build Status](https://travis-ci.org/generalov/robohydra-mock-server.svg?branch=master)](https://travis-ci.org/generalov/robohydra-mock-server)
[![Code Climate](https://codeclimate.com/github/generalov/robohydra-mock-server/badges/gpa.svg)](https://codeclimate.com/github/generalov/robohydra-mock-server)
[![Test Coverage](https://codeclimate.com/github/generalov/robohydra-mock-server/badges/coverage.svg)](https://codeclimate.com/github/generalov/robohydra-mock-server/coverage)

## Installation

```sh
npm i -g robohydra
npm i --save-dev robohydra-mock-server
```

## Configuration

Create a `robohydra.json` configuration file:

```Json
{
  "plugins": [
    "admin-extras",
    "forward-proxy"
  ],
  "pluginLoadPaths": [
    "node_modules/robohydra-mock-server/plugins"
  ],
  "summoner": {
    "hydraPickerPlugin": "admin-extras"
  }
}
```

Then run a RoboHydra server:

```sh
robohydra robohydra.json
```

Connections will be accepted on http://localhost:3000/.

## Usage

### Command Line Client

Let's add a some rules to our RoboHydra proxy. For example, let's it proxy connections to http://robohydra.org/.

```sh
curl -X POST \
  --data-urlencode newHeadType=proxy \
  --data-urlencode newProxyHeadMountPath=/robohydra.org/ \
  --data-urlencode newProxyHeadProxyTo=http://robohydra.org/ \
  --data-urlencode newProxyHeadSetHostHeader=on \
  http://localhost:3000/robohydra-admin/head/create
```

Check that it works:

```sh
curl --proxy http://localhost:3000 http://robohydra.org/
```

It should output HTML code.

And any other URLs have been rejected:

```sh
curl --proxy http://localhost:3000 http://rkn.gov.ru/
```

It should output a `Not Found`.

### JavaScript Client

```JavaScript
import MockServerClient = require('robohydra-mock-server/client');
import request = require('request');


/* create a client */
const roboHydraUrl = 'http://localhost:3000/';
const mockServerClient = new MockServerClient({ host: roboHydraUrl });


/* set expectations */

// proxy connections
const devServerProxy = () =>
  mockServerClient.when({ url: `http://robohydra.org/` }).proxy();

// fake respose
const fakeServerError = () =>
  mockServerClient
    .when({ url: `http://robohydra.org/fake` })
    .respose({ status: 500, body: '(Fake) Internal Server Error' });


const useIt = () =>
   const r = request.defaults({'proxy': roboHydraUrl});

   r.get(`http://robohydra.org/`)
     .on('response', (resp) => console.log(resp.statusCode) ); // 200

   r.get(`http://robohydra.org/fake`)
     .on('response', (resp) => console.log(resp.statusCode) ); // 500


const removeAllExpectations = () => mockServerClient.reset()


Promise.all([devServerProxy(), fakeServerError()])
  .then(useIt)
  .then(removeAllExpectations);
```

## TODO

 * [ ] Add support for HTTPS.
 * [ ] Add server-side validators.
 * [ ] Add Swagger mocking head.
 * [ ] Add support for multiple sessions.

[RoboHydra]: http://robohydra.org/
