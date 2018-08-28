import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFlagIconCssModule } from 'ngx-flag-icon-css'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFlagIconCssModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
