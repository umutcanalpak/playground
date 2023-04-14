import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { LazyLoadingTwoComponent } from './lazy-loading-two/lazy-loading-two.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LazyLoadingComponent,
  },
  {
    path: 'main',
    component: LazyLoadingComponent,
  },
  {
    path: 'main/:id',
    component: LazyLoadingComponent,
  },
  {
    path: 'two',
    component: LazyLoadingTwoComponent,
  },
];

@NgModule({
  declarations: [LazyLoadingComponent, LazyLoadingTwoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyLoadingModule {}
