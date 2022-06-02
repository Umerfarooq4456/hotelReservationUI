import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { environment } from '../../environments/environment'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  signUpForm !: FormGroup



  constructor(private formBuilder: FormBuilder,private _router: Router) { }




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
      confirmPassword: ['', Validators.required]

    })

  }

  Register() {


    console.log(this.signUpForm)

    if (!this.signUpForm.valid) {
      console.error("invalid form")
    }
    else {


      axios.post(environment.BaseURL + 'PostAccount',
        this.signUpForm.value,
      )
        .then(function (singup) {
          console.warn("succesful");

          console.error(singup)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

}
