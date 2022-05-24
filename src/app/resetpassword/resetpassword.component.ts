import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  ResetCode!: FormGroup;

  newPassword = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ email }) => {
      this.ResetCode = this.formBuilder.group({
        newPassword: this.newPassword,
        confirmPassword: this.confirmPassword,
        email: new FormControl(email),
      });
    });
  }

  resetCode() {
    console.log(this.ResetCode.value);

    axios
      .post(environment.BaseURL + 'ResetPassword', this.ResetCode.value)
      .then(({ data }) => {
        console.log(data);
        if (data.responseCode == 200) {

          this.router.navigate(['Login'])

        } else if (data.responseCode == 404) {
          //}
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
