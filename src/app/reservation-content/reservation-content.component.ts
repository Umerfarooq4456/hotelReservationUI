import { Component, Input, OnInit } from '@angular/core';

import axios from 'axios'

import { environment } from '../../environments/environment'

import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reservation-content',
  templateUrl: './reservation-content.component.html',
  styleUrls: ['./reservation-content.component.css']
})
export class ReservationContentComponent implements OnInit {



  /// this will pass to the child component Room Grid
  rooms: Array<any> = []



  CategoryId = new FormControl('', [Validators.required]);
  toDate = new FormControl('', [Validators.required]);
  fromDate = new FormControl('', [Validators.required]);

  SearchForm = new FormGroup({
    CategoryId: this.CategoryId,
    toDate: this.toDate,
    fromDate: this.fromDate

  })


  category: Array<any> = [] /// define the category as empty array of type Any Type depends on the response object of the api/end-point

  constructor() { }

  ngOnInit(): void {

    this.FetchRooms()
    /// it runs as the component load!!
    this.GetRoomCategory();

  }

  GetRoomCategory() {
    axios.get(environment.BaseURL + "GetRoomCatogery")
      .then(({ data }) => {
        this.category = data;  /// setting the response list to the local variable category
      })
      .catch(err => {
        console.error(err);
      })
  }

  FetchRooms() {


    console.log(this.SearchForm.value)

    axios.post(environment.BaseURL + "Rooms", {
      "CategoryId": 4,
      "toDate": "2022-05-13T19:00:00.000Z",
      "fromDate": "2022-05-10T19:00:00.000Z"
  })
      .then(({ data }) => {
        this.rooms = data;
        console.log(data)
      })
      .catch(err => {
        console.error(err);
      });
  }
}

