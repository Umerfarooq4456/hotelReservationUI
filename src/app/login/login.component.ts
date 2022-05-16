import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { environment } from '../../environments/environment'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform !: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    const control = new FormControl('bad@', Validators.email);

console.log(control.errors);

    this.loginform = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })

  }

  

  login() {

    console.log(this.loginform)

    if (!this.loginform.valid) {
      console.warn("invalid form")
    }
    else {


      axios.post(environment.BaseURL + 'PostAccountLogin',
        this.loginform.value,
      )
        .then(function (login) {
          console.log("succesful");

          console.error(login)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  
}
