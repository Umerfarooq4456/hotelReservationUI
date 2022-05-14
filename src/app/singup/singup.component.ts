import { Component, OnInit } from '@angular/core';
import axios from 'axios'

import { FormGroup, FormControl, FormBuilder,  Validators } from '@angular/forms';

import { environment } from '../../environments/environment'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  signUpForm !: FormGroup



  constructor(private formBuilder : FormBuilder) { }


  

  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      cnic: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber:['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]

    })

  }

  Register() {


    console.log(this.signUpForm)

    if(! this.signUpForm.valid){
console.error("invalid form")
    }
    else{


    axios.post(environment.BaseURL + 'PostAccount',
    this.signUpForm.value,
    )
      .then(function (zayn) {
        console.warn("succesful");

        console.error(zayn)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    }

}