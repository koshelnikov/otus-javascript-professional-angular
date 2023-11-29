import {Inject, Injectable} from '@angular/core';
import {CONFIGURATION_TOKEN} from "../../app.module";
import {Config} from "./config.type";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(@Inject(CONFIGURATION_TOKEN) private readonly _config: Config) {}

  get config() {
    return this._config;
  }

}
