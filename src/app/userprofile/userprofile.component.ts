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
  profileURL: string =
    'https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png';

  EditForm!: FormGroup;

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

          this.EditForm = this.formBuilder.group({
            Address: new FormControl(user.address, [Validators.required]),
            firstName: new FormControl(user.firstName, [Validators.required]),
            email: new FormControl(user.email, [Validators.required]),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onUpload() {
    console.log(this.file);

    let formData = new FormData();

    // Store form name as "file" with file data
    formData.append('file', this.file);
    formData.append('UserId', '1');

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
  }
}
