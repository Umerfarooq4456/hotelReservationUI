import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { environment } from 'src/environments/environment'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotform !: FormGroup
  password: any = ""

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
       const control = new FormControl('bad@', Validators.email);

console.log(control.errors);

    this.forgotform = this.formBuilder.group({
      ForgotPassword: ['', Validators.required],
    })

  }


  forgotpassword() {
    axios.post(environment.BaseURL + "ForgotPassword", this.password.value)
      .then(({ data }) => {
        console.log(data)
        this.password = data;

      })
      .catch(err => {
        console.error(err);
      });
  }

}
