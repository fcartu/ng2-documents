import { Injectable } from '@angular/core';

import { Document } from './document';

@Injectable()
export class QualityService {

  private documents: Document[] = [
    { Id: '1', AttributeName: 'Attr1', Value: 'Value1', RuleSummary: 'Rule1'},
    { Id: '2', AttributeName: 'Attr2', Value: 'Value2', RuleSummary: 'Rule2'},
    { Id: '3', AttributeName: 'Attr3', Value: 'Value3', RuleSummary: 'Rule3'}
  ];

  private mockDocuments = [
    { documentId: '1', documentContent: 'Lorem Ipsum is simply dummy'},
    { documentId: '2', documentContent: 'It is a long established'},
    { documentId: '3', documentContent: 'There are many variations of passages'}
  ];

  getDocuments(): Document[] {
    return this.documents;
  }

  getMockDocuments(): any {
    return this.mockDocuments;
  }
}
