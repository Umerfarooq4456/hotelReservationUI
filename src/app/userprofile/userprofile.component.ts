import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {


  User_Email : string = '';
  profileURL: string =
    'https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png';

  EditForm: FormGroup = new FormGroup({
   
    Address: new FormControl('', [Validators.required]),
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Cnic: new FormControl('', [Validators.required]),
    ContactNumber: new FormControl('', [Validators.required]),
  });

  shortLink: string = '';
  loading: boolean = false; // Flag variable
  file: any = undefined; // Flag variableVariable to store file



  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.GetProfile();

    
  }

  // On file Select
  onChange(event: any) {

        this.file = event.target.files[0];
     this.onUpload()

  }

  GetProfile() {
    axios
      .get(environment.BaseURL + 'GetAccountByUserId', {
        params: { userId: 1 },
      })
      .then(({ data }) => {
        console.log(data);

        if (data.responseCode === 200) {
          var user = data.responseData;

          console.log(user);
          this.profileURL = environment.ProfileFoto + user.profilePhoto;

          this.User_Email = user.email
          this.EditForm = new FormGroup({
            user_Id: new FormControl(localStorage.getItem('Hotel_UserId'), [Validators.required]),
            Address: new FormControl(user.address, [Validators.required]),
            FirstName: new FormControl(user.firstName, [Validators.required]),
            LastName: new FormControl(user.lastName, [Validators.required]),
            Email: new FormControl(user.email, [Validators.required]),
            Cnic: new FormControl(user.cnic, [Validators.required]),
            ContactNumber: new FormControl(user.contactNumber, [Validators.required]),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onUpload() {
  

    let formData = new FormData();

    // Store form name as "file" with file data
    formData.append('file', this.file);
    formData.append('UserId', '1'); /// use localstorage for this 

    axios
      .post(environment.BaseURL + 'UploadProfilePhoto', formData, {
        headers: { 'Content-type': 'multipart/form-data' },
      })
      .then(({ data }) => {
        console.log(data);
        if (data.responseCode === 200) {
          this.profileURL =
            environment.ProfileFoto + data.responseData.imageURL;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  SaveProfile() {
    console.log(this.EditForm.value);

    axios.post(environment.BaseURL + "UpdateProfileRequest" , this.EditForm.value)
    .then(({data})=>{
     
      if(data.responseCode === 200) {
            this.User_Email = this.EditForm.value.Email
      }
  

    })
    .catch(err =>{
      console.log(err);
    })
  }
}
