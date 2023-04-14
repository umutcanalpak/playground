import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { LazyLoadingTwoComponent } from './lazy-loading-two/lazy-loading-two.component';
import { RouterModule, Routes } from '@angular/router';
import { MaviComponent } from '../mavi/mavi.component';
import { SiyahComponent } from '../siyah/siyah.component';

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
    children: [
      {
        path: '',
        redirectTo:'mavi',
        pathMatch: 'full'
      },
      {
        path: 'asd',
        redirectTo:'siyah'
      },
      {
        path: 'mavi',
        component: MaviComponent
      },
      {
        path: 'siyah',
        component: SiyahComponent
      }
    ]
  },
];

@NgModule({
  declarations: [LazyLoadingComponent, LazyLoadingTwoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyLoadingModule {}
