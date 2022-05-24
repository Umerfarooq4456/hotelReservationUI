import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

import { Router  } from '@angular/router'

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  forgotform!: FormGroup;
  email = new FormControl('', [Validators.email, Validators.required]);

  error_message: string | undefined;
  success_message: string | undefined;

  constructor(private formBuilder: FormBuilder,private _router: Router) {}

  ngOnInit(): void {
    this.forgotform = this.formBuilder.group({
      email: this.email,
    });
  }

  forgotpassword() {
    this.error_message = undefined;
    this.success_message = undefined;
    axios
      .post(environment.BaseURL + 'ForgotPassword', this.forgotform.value)
      .then(({ data }) => {

        console.log(data)

        if (data.responseCode == 404) {
          this.error_message = data.responseMessage;
        } else if (data.responseCode == 200) {
          this.success_message = data.responseMessage;

          this._router.navigate(['verificationcode', data.responseData.email])

        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
