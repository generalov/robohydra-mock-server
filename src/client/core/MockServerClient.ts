/**
 * Created by Evgeniy_Generalov on 10/17/2016.
 */

import {Observable} from 'rxjs';
import request = require('request');

import {Expectation} from './Expectation';
import {IncomingMessage} from 'http';


const DEFAULT_HOST: string = 'http://localhost:3000';
const DEFAULT_USER_AGENT: string = '*default*';


export class MockServerClient {
  public host: string;
  public userAgent: string;

  public get = Observable.bindNodeCallback(request.get);
  public post = Observable.bindNodeCallback(request.post);
  public put = Observable.bindNodeCallback(request.put);

  constructor(options?: {host?: string, userAgent?: string}) {
    options || (options = {});
    this.host = options.host || DEFAULT_HOST;
    this.userAgent = options.userAgent || DEFAULT_USER_AGENT;
  }

  get headers(): Object {
    return {
      'User-Agent': this.userAgent
    };
  }

  /**
   * Specify an unlimited expectation that will respond regardless of the number of matching http
   * for example:
   *
   *   mockServerClient
   *           .when(
   *               request({url: "/some_path"})
   *               .respond({status: 200, body: "some_response_body"})
   *           );
   *
   * @param expectations
   * @returns Promise
   */
  public when(...expectations: Array<Expectation>): Promise<[IncomingMessage]> {
    const promises = expectations.map((value: Expectation) => value.sendExpectation(this));
    return Promise.all(promises);
  }

  /**
   * Reset MockServerClient by clearing all expectations.
   *
   * @returns Promise
   */
  public reset(): Promise<IncomingMessage> {
    return this.put({
      url: this.adminUrl('/rest/heads/dynamic'),
      headers: this.headers
    }).toPromise();
  };

  /**
   * Build URL belongs to robohydra admin.
   *
   * @param path belongs to robohydra admin site.
   * @returns full URL.
   */
  public adminUrl(path: string) {
    return this.host.replace(/\/+$/, '') + '/robohydra-admin' + path;
  }
}
