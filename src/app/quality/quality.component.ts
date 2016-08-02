import { Component, OnInit } from '@angular/core';

import { Document } from './document.ts';

@Component({
  selector: 'quality',
  templateUrl: 'quality.component.html'
})
export class QualityComponent implements OnInit {

  documents: Document[] = [
    { Id: "1", AttributeName: "Attr1", Value: "Value1", RuleSummary: "Rule1"},
    { Id: "2", AttributeName: "Attr2", Value: "Value2", RuleSummary: "Rule2"},
    { Id: "3", AttributeName: "Attr3", Value: "Value3", RuleSummary: "Rule3"}
  ];

  constructor() { }

  ngOnInit() {}

}
