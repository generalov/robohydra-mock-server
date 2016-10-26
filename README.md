# RoboHydra Mock Server

This is a mocking server for using in e2e tests based on [RoboHydra](RoboHydra) framework.

[![npm](https://img.shields.io/npm/v/@generalov/robohydra-mock-server.svg)](https://www.npmjs.com/package/@generalov/robohydra-mock-server)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/generalov/robohydra-mock-server/master/LICENSE)
[![Build Status](https://travis-ci.org/generalov/robohydra-mock-server.svg?branch=master)](https://travis-ci.org/generalov/robohydra-mock-server)
[![Code Climate](https://codeclimate.com/github/generalov/robohydra-mock-server/badges/gpa.svg)](https://codeclimate.com/github/generalov/robohydra-mock-server)
[![Test Coverage](https://codeclimate.com/github/generalov/robohydra-mock-server/badges/coverage.svg)](https://codeclimate.com/github/generalov/robohydra-mock-server/coverage)


## Usage

```JavaScript
import MockServerClient = require('@generalov/robohydra-mock-server/client');
import request = require('request');

const apiUrl = 'http://api.openweathermap.org';
const roboHydraUrl = 'http://localhost:3000/';

// create client
const mockServerClient = new MockServerClient({ host: roboHydraUrl });

// set expectations
const devServerProxy = () =>
  mockServerClient.when({ url: `${apiUrl}/` }).proxy();

// fake respose
const fakeServerError = () =>
  mockServerClient
    .when({ url: `${apiUrl}/fake` })
    .respose({ status: 500, body: '(Fake) Internal Server Error' });

// work with proxy
const spec = Promise.all([devServerProxy(), fakeServerError()])
  .then(() => {
    const r = request.defaults({'proxy': roboHydraUrl});

    r.get(`${apiUrl}/`)
      .on('response', (resp) => console.log(resp.statusCode) ); // 200

    r.get(`${apiUrl}/fake`)
      .on('response', (resp) => console.log(resp.statusCode) ); // 500
  });

// remove all expectations
spec
  .then(() => mockServerClient.reset())
  .catch(() => mockServerClient.reset());

```
## Installation

## Configuration

## TODO

* [ ]


[RoboHydra]: http://robohydra.org/

