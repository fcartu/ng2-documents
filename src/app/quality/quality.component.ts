import { Component, OnInit } from '@angular/core';

import { Document, QualityService } from './shared';
import { QualityGridComponent } from './quality-grid';
import { QualityDetailsComponent } from './quality-details';

@Component({
  selector: 'quality-container',
  directives: [
    QualityGridComponent,
    QualityDetailsComponent
  ],
  providers: [QualityService],
  templateUrl: 'quality.component.html'
})
export class QualityComponent implements OnInit {

  documents: Document[];

  mockDocuments: any[];

  selectedDocId: string;
  selectedDocumentContent: string;

  constructor(private qaService: QualityService) {}

  ngOnInit() {
    this.documents = this.qaService.getDocuments();

    this.mockDocuments = this.qaService.getMockDocuments();
  }

  onSelectDoc(value: any) {
    this.selectedDocId = value;

    let doc = this.mockDocuments.filter(item => item.documentId === this.selectedDocId)[0];
    this.selectedDocumentContent = doc.documentContent;
  }

}
