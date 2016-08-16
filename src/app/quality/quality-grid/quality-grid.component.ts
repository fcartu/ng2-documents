import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

import { Document, QualityService } from '../shared';

@Component({
  selector: 'qa-grid',
  styles: [`
    .selected {
      background-color: #ECECEC;
    }
  `],
  providers: [QualityService],
  templateUrl: 'quality-grid.component.html'
})
export class QualityGridComponent implements OnInit {

  documents: Document[];

  @Output() selectDocument: EventEmitter<any> = new EventEmitter();

  constructor(private qaService: QualityService) {}

  ngOnInit() {
    this.qaService
        .getDocuments()
        .subscribe(res => this.documents = res);
  }

  contentPreview(docId: string) {
    let selectedDoc: Document =
      this.documents.filter(item => item.Id === docId)[0];

    if (selectedDoc)
      this.selectDocument.emit(selectedDoc.Content);
  }

}
