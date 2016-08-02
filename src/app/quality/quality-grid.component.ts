import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'qa-grid',
  templateUrl: 'quality-grid.component.html'
})
export class QualityGridComponent implements OnInit {

  @Input() resultDocs: Document[];

  @Output() selectDocument: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  contentPreview(docId: string) {
    this.selectDocument.emit(docId);
  }

}
