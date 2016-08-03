import { Component, OnInit } from '@angular/core';

import { Document } from './document';
import { QualityGridComponent } from './quality-grid.component';
import { QualityDetailsComponent } from './quality-details.component';

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

  constructor() { }

  ngOnInit() {}

  onSelectDoc(value: any) {
    this.selectedDocId = value;
  }

}
