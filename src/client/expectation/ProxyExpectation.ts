/**
 * Created by Evgeniy_Generalov on 10/28/2016.
 */

import {IncomingMessage} from 'http';

import {Expectation} from '../core/Expectation';
import {MockServerClient} from '../core/MockServerClient';
import {HttpRequest} from '../core/HttpRequest';


export class ProxyExpectation implements Expectation {
  private requeset: HttpRequest;

  constructor(options: HttpRequest) {
    this.requeset = {
      url: options.url
    };
  }

  public sendExpectation(client: MockServerClient): Promise<IncomingMessage> {
    const mountPath: string = this.requeset.url.replace(/(^http:\/\/)/, '');

    return client.post({
      url: client.adminUrl('/head/create'),
      form: {
        newHeadType: 'proxy',
        newProxyHeadMountPath: mountPath,
        newProxyHeadProxyTo: this.requeset.url,
        newProxyHeadSetHostHeader: 'on'
      },
      headers: client.headers
    }).toPromise();
  }

}
