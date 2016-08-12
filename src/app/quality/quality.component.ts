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
    this.qaService
        .getDocuments()
        .subscribe(res => this.documents = res);
  }

  onSelectDoc(value: any) {
    this.selectedDocId = value;

    let doc = this.documents.filter(item => item.Id === this.selectedDocId)[0];

    this.selectedDocumentContent = doc.Content;
  }

}
