/**
 * Created by Evgeniy_Generalov on 10/28/2016.
 */
import {IncomingMessage} from 'http';

import {Expectation} from '../core/Expectation';
import {HttpRequest} from '../core/HttpRequest';
import {HttpResponse} from '../core/HttpResponse';
import {MockServerClient} from '../core/MockServerClient';


export class StaticResponseExpectation implements Expectation {
  private request: HttpRequest;
  private response: HttpResponse;

  constructor(options?: HttpRequest) {
    this.request = {
      method: options && options.method || undefined,
      url: options && options.url || undefined
    };
    this.response = {
      status: 200,
      contentType: 'text/plain',
      body: ''
    };
  }

  public respond(options: HttpResponse) {
    this.response.body = options.body;
    if (this.response.status) {
      this.response.status = options.status;
    }
    if (options.contentType) {
      this.response.contentType = options.contentType;
    }
    return this;
  }

  public sendExpectation(client: MockServerClient): Promise<IncomingMessage> {
    return client.post({
      url: client.adminUrl('/head/create'),
      form: {
        newHeadType: 'static',
        newStaticHeadPath: this.request.url.replace(/(^http:\/\/)/, '/'),
        newStaticHeadContent: this.response.body,
        newStaticHeadStatus: this.response.status,
        newStaticHeadContentType: this.response.contentType,
        newStaticHeadHeaders: ''
      },
      headers: client.headers
    }).toPromise();
  }

  public whenStatus(status: number) {
    this.response.status = status;
  }

  public whenUrl(url: string) {
    this.request.url = url;
  }

  public whenContentType(contentType: string) {
    this.response.contentType = contentType;
  }

  public whenContent(content: string) {
    this.response.body = content;
  }
}
