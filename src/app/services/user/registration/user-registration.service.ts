import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {fromPromise} from "rxjs/internal/observable/innerFrom";

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor() { }

  isLoginFree(login: string): Observable<boolean> {
    return fromPromise(new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.random() < 0.5)
      }, Math.floor(Math.random() * 1000))
    }))
  }
}
