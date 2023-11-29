import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RolesComponent } from './components/roles/roles.component';
import {environment} from "../environments/environment";
import {Config} from "./services/config/config.type";
import { SearchComponent } from './components/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

export const CONFIGURATION_TOKEN= new InjectionToken<Config>('config')


@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    SearchComponent
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
