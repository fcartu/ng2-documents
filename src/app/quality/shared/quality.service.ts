import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Document } from './document';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class QualityService {

  private API_URL: string = 'http://localhost:3004';

  constructor(private http: Http) {}

  getDocuments(): Observable<Document[]> {
    return this.http.get(this.API_URL + '/documents')
              .map(this.handleData)
              .catch(this.handleError);
  }

  private handleData(res: Response) {
    return (<any>res.json())
          .map(item => {
            return new Document({
              id: item.id,
              attrName: item.attribute_name,
              value: item.value,
              ruleSummary: item.rule_summary,
              content: item.content
            });
          });
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    return Observable.throw(errMsg);
  }
}
