import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorDirectiveDirective } from './color-directive.directive';
import { MaviComponent } from './mavi/mavi.component';
import { SiyahComponent } from './siyah/siyah.component';
import { FormsModule } from '@angular/forms';
import { JesseComponent } from './jesse/jesse.component';
import { ParentComponent } from './parent/parent.component';
import { GeraltComponent } from './geralt/geralt.component';
import { HenryComponent } from './henry/henry.component';
import { RaynorComponent } from './raynor/raynor.component';
import { OnPushParentComponent } from './on-push-parent/on-push-parent.component';
import { OnPushChildComponent } from './on-push-child/on-push-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirectiveDirective,
    MaviComponent,
    SiyahComponent,
    JesseComponent,
    ParentComponent,
    GeraltComponent,
    HenryComponent,
    RaynorComponent,
    OnPushParentComponent,
    OnPushChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
