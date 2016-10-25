/**
 * Created by Evgeniy_Generalov on 10/17/2016.
 */

export class StaticHeadSerializer {
  private _data;

  constructor() {
    this._data = {
      newHeadType: 'static',
      newStaticHeadPath: '',
      newStaticHeadContent: '',
      newStaticHeadStatus: 200,
      newStaticHeadContentType: 'text/plain',
      newStaticHeadHeaders: ''
    }
  }

  whenStatus(status: number) {
    this._data.newStaticHeadStatus = status;
  }

  whenUrl(path: string) {
    this._data.newStaticHeadPath = path.replace(/(^http:\/\/)/, '/');
  }

  whenContentType(contentType: string) {
    this._data.newStaticHeadContentType = contentType;
  }

  whenContent(content: string) {
    this._data.newStaticHeadContent = content;
  }

  get data() {
    return this._data;
  }
}
