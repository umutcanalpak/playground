import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MikeService } from '../mike.service';

@Component({
  selector: 'app-mavi',
  templateUrl: './mavi.component.html',
  styleUrls: ['./mavi.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaviComponent {
  @Input() titleChild = '';
  @Input() childArray = [];
  @Input() childObject = {};
  @Output() titleChildChange = new EventEmitter<string>()
  time = 0;

  constructor(private mikeService: MikeService) {}

  ngOnInit(): void {
    this.time = this.mikeService.time;
  }

  onInput() {
    this.titleChildChange.emit(this.titleChild);
  }
}
