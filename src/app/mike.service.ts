import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MikeService {
  time: number;

  constructor() {
    for (let i = 0; i < 1000000000; i++) {}

    this.time = new Date().getTime();
  }
}
