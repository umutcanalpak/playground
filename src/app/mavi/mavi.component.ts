import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mavi',
  templateUrl: './mavi.component.html',
  styleUrls: ['./mavi.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaviComponent {
  @Input() titleChild = '';
  @Output() titleChildChange = new EventEmitter<string>()
  @Input() parentObject = {};

  constructor() {}

  onInput() {
    this.titleChildChange.emit(this.titleChild);
  }
}
