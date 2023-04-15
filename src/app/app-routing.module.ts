import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JesseComponent } from './jesse/jesse.component';
import { ParentComponent } from './parent/parent.component';
import { RaynorComponent } from './raynor/raynor.component';
import { OnPushParentComponent } from './on-push-parent/on-push-parent.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { HomeComponent } from './home/home.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ServerCallComponent } from './server-call/server-call.component';
import { MaviComponent } from './mavi/mavi.component';
import { SiyahComponent } from './siyah/siyah.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'server-call',
    component: ServerCallComponent,
  },
  {
    path: 'view-child',
    component: ViewchildComponent,
  },
  {
    path: 'jesse',
    component: JesseComponent,
  },
  {
    path: 'jesse/:id',
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
  {
    path: 'pipe-test',
    component: PipeTestComponent,
  },
  {
    path: 'lazy-loading',
    loadChildren: () =>
      import('./lazy-loading/lazy-loading.module').then(
        (m) => m.LazyLoadingModule
      ),
  },
  {
    path: 'siyah',
    component: SiyahComponent,
    // pathMatch: 'full',
    children: [
      {
        path: 'mavi',
        component: MaviComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
