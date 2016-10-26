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

const robyHydraUrl = 'http://localhost:3000/';
const mockServerClient = new MockServerClient({host: roboHydraUrl});

Promise.all([
    mockServerClient
        .when({url: 'http://localhost:8080'})
        .proxy(),
    mockServerClient
        .when({url: 'http://api.openweathermap.org/'})
        .respose({
            status: 500,
            body: '(Fake) Internal Server Error'
        })
]).then(() => {
}).then(() => mockServerClient.reset(), () => mockServerClient.reset()); 

```
## Installation

## Configuration

## TODO

* [ ]


[RoboHydra]: http://robohydra.org/

