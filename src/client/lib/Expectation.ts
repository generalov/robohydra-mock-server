/**
 * Created by Evgeniy_Generalov on 10/17/2016.
 */
import {HttpResponse} from './HttpResponse';
import {HttpRequest} from './HttpRequest';
import {StaticHeadSerializer} from './StaticHeadSerializer';


export class Expectation {
  private response: HttpResponse;
  private request: HttpRequest;

  constructor(request: HttpRequest) {
    this.request = request;
  }

  serialize(serializer: StaticHeadSerializer) {
    serializer.whenUrl(this.request.url);

    serializer.whenStatus(this.response.status || 200);
    serializer.whenContent(this.response.body || '');
    serializer.whenContentType(this.response.contentType || 'text/plain');
  }

  thenRespond(response: HttpResponse) {
    this.response = response;
  }
}

