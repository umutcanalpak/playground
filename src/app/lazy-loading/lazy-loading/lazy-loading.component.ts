import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss'],
})
export class LazyLoadingComponent implements OnInit {
  constructor(public activatedRoute: ActivatedRoute, public router: Router) {
    console.log('constructor LazyLoadingComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit LazyLoadingComponent');
  }

  goToRandomId() {
    const randomNumber = Math.floor(Math.random() * 100);

    this.router.navigate(['main', randomNumber], {
      relativeTo: this.activatedRoute.parent,
    });
  }
}
