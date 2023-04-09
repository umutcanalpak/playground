import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JesseComponent } from './jesse/jesse.component';
import { ParentComponent } from './parent/parent.component';
import { RaynorComponent } from './raynor/raynor.component';
import { OnPushParentComponent } from './on-push-parent/on-push-parent.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
  },
  {
    path: 'jesse',
    component: JesseComponent,
  },
  {
    path: 'raynor',
    component: RaynorComponent,
  },
  {
    path: 'on-push-parent',
    component: OnPushParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
