import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnInit {
  signUpForm!: FormGroup;

  BothPassword = true;

  constructor(private formBuilder: FormBuilder, private _router: Router) {}

  ngOnInit(): void {
    const control = new FormControl('bad@', Validators.email);

    console.log(control.errors);

    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      cnic: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  Register() {
    this.MustMatch();

    if (!this.signUpForm.valid || !this.BothPassword) {
      console.error('invalid form');
    } else {
      console.log(this.signUpForm.valid);

      axios
        .post(environment.BaseURL + 'PostAccount', this.signUpForm.value)

        .then(({ data }) => {
          this._router.navigate(['Login']);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  MustMatch() {
    let password = this.signUpForm.value.password;
    let confirmPassword = this.signUpForm.value.confirmPassword;
    if (password == confirmPassword) {
      this.BothPassword = true;
    } else if (password.length > 0 && confirmPassword.length > 0) {
      this.BothPassword = false;
    }
  }
}
