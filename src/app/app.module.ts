import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Basicdirec } from './shared/directives/basicCss.directive';
import { Advancecss } from './shared/directives/advanceCss.directives';
import { Mouseeventrs } from './shared/directives/mouseCss.directive';


@NgModule({
  declarations: [
    AppComponent,
    Basicdirec,
    Advancecss,
    Mouseeventrs
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
