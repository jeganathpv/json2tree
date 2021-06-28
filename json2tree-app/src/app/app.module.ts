import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// To use library from public API
// import { Json2TreeModule } from 'projects/json2-tree/src/public-api';

// To use library pack
import { Json2TreeModule } from 'ngx-json-tree';
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
