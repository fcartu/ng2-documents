import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qa-grid',
  templateUrl: 'quality-grid.component.html'
})
export class QualityGridComponent implements OnInit {

  @Input() resultDocs: Document[];

  constructor() { }

  ngOnInit() { }

}
