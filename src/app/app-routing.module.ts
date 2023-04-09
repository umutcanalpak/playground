import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JesseComponent } from './jesse/jesse.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [{
  path: '',
  component: ParentComponent
},{
  path: 'jesse',
  component: JesseComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
