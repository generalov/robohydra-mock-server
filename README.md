# RoboHydra Mock Server

This is a mocking server for using in e2e tests based on [RoboHydra](RoboHydra) framework.

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

