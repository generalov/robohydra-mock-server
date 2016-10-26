/**
 * Created by Evgeniy_Generalov on 10/17/2016.
 */

import {Observable} from 'rxjs';
import request = require('request');

import {ForwardChainExpectation} from './ForwardChainExpectation';
import {Expectation} from './Expectation';
import {HttpRequest} from './HttpRequest';
import {StaticHeadSerializer} from './StaticHeadSerializer';
import {IncomingMessage} from 'http';


export class MockServerClient {
  private url: string;
  private userAgent: string;
  private headers: Object;

  constructor(options: {host: string, userAgent?: string}) {
    this.url = options.host.replace(/\/+$/, '') + '/robohydra-admin';
    this.userAgent = options.userAgent || '*default*';
    this.headers = {
      'User-Agent': options.userAgent
    };
  }

  /**
   * Specify an unlimited expectation that will respond regardless of the number of matching http
   * for example:
   *
   *   mockServerClient
   *           .when(
   *                   {url: "/some_path"}
   *           )
   *           .respond(
   *                   {status: 200, body: "some_response_body"}
   *           );
   *
   * @param httpRequest the http request that must be matched for this expectation to respond
   * @return an ForwardChainExpectation object that can be used to specify the response
   */
  when(httpRequest: HttpRequest): ForwardChainExpectation {
    return new ForwardChainExpectation(this, new Expectation(httpRequest));
  }

  /**
   * Reset MockServerClient by clearing all expectations
   * @return {Promise<any>}
   */
  reset(): Promise<any> {
    const put = Observable.bindNodeCallback(request.put);
    return put({
      url: this.url + '/rest/heads/dynamic',
      headers: this.headers
    }).toPromise();
  };

  /**
   * Add proxy head.
   * @param proxyOptions
   * @returns {Promise<IncomingMessage>}
   */
  proxy(proxyOptions: {url: string}): Promise<IncomingMessage> {
    const post = Observable.bindNodeCallback(request.post);
    const mountPath: string = proxyOptions.url.replace(/(^http:\/\/)/, '');

    return post({
      url: this.url + '/head/create',
      form: {
        newHeadType: 'proxy',
        newProxyHeadMountPath: mountPath,
        newProxyHeadProxyTo: proxyOptions.url,
        newProxyHeadSetHostHeader: 'on'
      },
      headers: this.headers
    }).toPromise();
  }

  sendExpectation(expectation: Expectation): Promise<IncomingMessage> {
    const serializer = new StaticHeadSerializer();
    const post = Observable.bindNodeCallback(request.post);

    expectation.serialize(serializer);
    return post({
      url: this.url + '/head/create',
      form: serializer.data,
      headers: this.headers
    }).toPromise();
  }

}
