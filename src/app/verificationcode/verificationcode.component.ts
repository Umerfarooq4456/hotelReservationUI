import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { environment } from 'src/environments/environment'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router , ActivatedRoute  } from '@angular/router'




@Component({
  selector: 'app-verificationcode',
  templateUrl: './verificationcode.component.html',
  styleUrls: ['./verificationcode.component.css']
})
export class VerificationcodeComponent implements OnInit {



  ParamEmail : string = ""

  error_message : string | undefined
  Verification !: FormGroup
  code = new FormControl('', [Validators.required]);
  




  constructor(private formBuilder: FormBuilder,private _router: Router, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {

  

    this.activatedRoute.params.subscribe(({ email }) => {
      this.Verification = this.formBuilder.group({
        code: this.code,
        email: new FormControl(email),
      });

      this.ParamEmail = email;

    });

 

  }

  VerificationCode(){
    
    this.error_message = undefined;
    console.log(this.Verification.value);
    axios
      .post(environment.BaseURL + 'VerificationCode', this.Verification.value)
      .then(({ data }) => {
        if (data.responseCode == 404) {
          this.error_message = data.responseMessage;
        } else if (data.responseCode == 200) {

          
          this._router.navigate(['resetpassword' ,  this.ParamEmail  ])

         }
         console.log(data)
      })
      .catch((err) => {
        console.error(err);
      });
  
  }
}
