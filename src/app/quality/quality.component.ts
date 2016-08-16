import { Component } from '@angular/core';

import { QualityGridComponent } from './quality-grid';
import { QualityDetailsComponent } from './quality-details';

@Component({
  selector: 'quality-container',
  directives: [
    QualityGridComponent,
    QualityDetailsComponent
  ],
  templateUrl: 'quality.component.html'
})
export class QualityComponent {

  documents: Document[];

  selectedDocumentContent: string;

  onSelectDoc(value: any) {
    this.selectedDocumentContent = value;
  }

}
