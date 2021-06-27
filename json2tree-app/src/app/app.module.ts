import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Json2TreeModule } from 'json2-tree';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Json2TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
