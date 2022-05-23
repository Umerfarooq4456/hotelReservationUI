import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { environment } from 'src/environments/environment'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-verificationcode',
  templateUrl: './verificationcode.component.html',
  styleUrls: ['./verificationcode.component.css']
})
export class VerificationcodeComponent implements OnInit {

  Verification !: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  VerificationCode(){
    
  }
}
