import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'qa-grid',
  styles: [`
    .selected {
      background-color: #ECECEC;
    }
  `],
  templateUrl: 'quality-grid.component.html'
})
export class QualityGridComponent {

  @Input() resultDocs: Document[];

  @Output() selectDocument: EventEmitter<any> = new EventEmitter();

  selectedDocId: string;

  contentPreview(docId: string) {
    this.selectedDocId = docId;
    this.selectDocument.emit(docId);
  }

}
