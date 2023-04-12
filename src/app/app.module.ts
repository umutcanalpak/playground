import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDirectiveDirective } from './color-directive.directive';
import { MaviComponent } from './mavi/mavi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JesseComponent } from './jesse/jesse.component';
import { ParentComponent } from './parent/parent.component';
import { GeraltComponent } from './geralt/geralt.component';
import { HenryComponent } from './henry/henry.component';
import { RaynorComponent } from './raynor/raynor.component';
import { OnPushParentComponent } from './on-push-parent/on-push-parent.component';
import { OnPushChildComponent } from './on-push-child/on-push-child.component';
import { MyPipePipe } from './my-pipe.pipe';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { MySecondPipePipe } from './my-second-pipe.pipe';
import { HomeComponent } from './home/home.component';
import { ViewchildComponent } from './viewchild/viewchild.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirectiveDirective,
    MaviComponent,
    JesseComponent,
    ParentComponent,
    GeraltComponent,
    HenryComponent,
    RaynorComponent,
    OnPushParentComponent,
    OnPushChildComponent,
    MyPipePipe,
    MySecondPipePipe,
    PipeTestComponent,
    HomeComponent,
    ViewchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
