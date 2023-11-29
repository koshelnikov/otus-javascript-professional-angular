import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UserRegistrationService} from "../../services/user/registration/user-registration.service";
import {debounceTime, distinctUntilChanged, filter, first, map, of, Subject, switchMap, tap} from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  loader$ = new Subject<boolean>()

  login: FormControl = new FormControl('', {
    updateOn: 'change',
    asyncValidators: (model) =>
      model.valueChanges
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          filter(value => !!value),
          tap(() => this.loader$.next(true)),
          switchMap(value => this.userRegistrationService
            .isLoginFree(value)),
          tap(() => this.loader$.next(false)),
          map(value =>
            value
              ? null
              : { login: `${model.value} is busy`}),
          first())
  })

  constructor(private readonly userRegistrationService: UserRegistrationService) {
  }

}
