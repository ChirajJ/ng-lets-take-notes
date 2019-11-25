import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { SharedService } from 'src/app/services/shared.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginMsgStatus: boolean;
  loginFormGroup: FormGroup;

  constructor(private sharedService: SharedService) {
    this.loginMsgStatus = false;
  }

  login() {

    this.loginMsgStatus = false;
    console.log('====>', this.loginFormGroup);
    const { email, pswd } = this.loginFormGroup.value;
    this.sharedService.login(email, pswd)
    .catch( err => this.loginMsgStatus = true);
  }

  ngOnInit() {

    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      pswd: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

}
