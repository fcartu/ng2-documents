import { Component, Input } from '@angular/core';

@Component({
  selector: 'qa-details',
  styles: [`
    textarea {
      resize: vertical;
      min-height: 200px;
    }
  `],
  templateUrl: 'quality-details.component.html'
})
export class QualityDetailsComponent {

  @Input() selectedDocumentId: string;
  @Input() documentContent: string;

}
