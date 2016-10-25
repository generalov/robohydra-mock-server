# Forward HTTP proxy plugin for RoboHydra

It's allows to use a [RoboHydra](RoboHydra) server as HTTP proxy.

Proxy mode allows RoboHydra server to control all HTTP traffic 
between browser and web services 
without changing any URLs on web pages under the test.

## Usage

Add `forward-proxy` plugin to the robohydra config file:

```json
{"plugins": ["robohydra-forward-proxy"] }
```

After that, all incoming requests will be internally mapped to paths prefixed by the host.

Use RoboHydra url as http proxy then requesting a web services.

```sh
curl --proxy http://localhost:3000 http://localhost:8080
```

For example, you may define a rule having a custom response at /api/users/list and proxying all other requests to the real web service.

```JavaScript
new RoboHydraHeadStatic({
  path: '/localhost:8080/api/users/list',
  statusCode: 500,
  content: '(Fake) Internal Server Error'
}),
new RoboHydraHeadProxy({
  mountPath: '/localhost:8080',
  proxyTo: 'http://localhost:8080'
}),
```

HTTPS hasn't supported yet.

## TODO

* [ ] Add HTTPS support

[RoboHydra]: http://robohydra.org/
