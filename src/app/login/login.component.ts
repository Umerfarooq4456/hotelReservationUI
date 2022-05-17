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



    if (this.loginform.valid)  {

      axios.post(environment.BaseURL + 'PostAccountLogin',
        this.loginform.value,
      )
        .then( ({data}) => { //// destructing the response object and extracting the data
      

          console.log(data);
          localStorage.setItem("Hotel_UserId",data.responseData.userId)
         console.log("Hotel_UserId",data.responseData.userId)

         this.getUserId();
        })
        .catch(function (error) {
          console.error("Error in login API call" + error);
        });

        
    }
  }


  getUserId(){
    let user_id = localStorage.getItem("Hotel_UserId");


    console.warn(user_id);
  }
  
}


