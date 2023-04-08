import { Component } from '@angular/core';
import { MikeService } from '../mike.service';

@Component({
  selector: 'app-mavi',
  templateUrl: './mavi.component.html',
  styleUrls: ['./mavi.component.scss'],
})
export class MaviComponent {
  time = 0;

  constructor(private mikeService: MikeService) {}

  ngOnInit(): void {
    this.time = this.mikeService.time;
  }
}
