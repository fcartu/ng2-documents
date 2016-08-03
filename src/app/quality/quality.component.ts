import { Component, OnInit } from '@angular/core';

import { Document } from './document';
import { QualityGridComponent } from './quality-grid.component';
import { QualityDetailsComponent } from './quality-details.component';

var mockDocuments = [
  { documentId: "1", documentContent: "Lorem Ipsum is simply dummy"},
  { documentId: "2", documentContent: "It is a long established"},
  { documentId: "3", documentContent: "There are many variations of passages"}
];

@Component({
  selector: 'quality',
  directives: [
    QualityGridComponent,
    QualityDetailsComponent
  ],
  templateUrl: 'quality.component.html'
})
export class QualityComponent implements OnInit {

  documents: Document[] = [
    { Id: "1", AttributeName: "Attr1", Value: "Value1", RuleSummary: "Rule1"},
    { Id: "2", AttributeName: "Attr2", Value: "Value2", RuleSummary: "Rule2"},
    { Id: "3", AttributeName: "Attr3", Value: "Value3", RuleSummary: "Rule3"}
  ];

  selectedDocId: string;
  selectedDocumentContent: string;

  constructor() { }

  ngOnInit() {}

  onSelectDoc(value: any) {
    this.selectedDocId = value;

    let doc = mockDocuments.filter(item => item.documentId === this.selectedDocId)[0];
    this.selectedDocumentContent = doc.documentContent;
  }

}
