import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MikeService } from '../mike.service';

@Component({
  selector: 'app-mavi',
  templateUrl: './mavi.component.html',
  styleUrls: ['./mavi.component.scss'],
})
export class MaviComponent {
  @Input() titleChild = '';
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
