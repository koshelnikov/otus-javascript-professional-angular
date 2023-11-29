import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {Config} from "./services/config/config.type";
import { SearchComponent } from './components/search/search.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const CONFIGURATION_TOKEN= new InjectionToken<Config>('config')


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: CONFIGURATION_TOKEN, useValue: environment
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
