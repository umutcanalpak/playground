import { Component } from '@angular/core';
import { MikeService } from '../mike.service';

@Component({
  selector: 'app-siyah',
  templateUrl: './siyah.component.html',
  styleUrls: ['./siyah.component.scss'],
  providers: [MikeService],
})
export class SiyahComponent {
  time = 0;

  constructor(private mikeService: MikeService) {}

  ngOnInit(): void {
   this.time = this.mikeService.time;
  }
}
