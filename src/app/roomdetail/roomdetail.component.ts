import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';




import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { environment } from '../../environments/environment'
import axios from 'axios'
import { concatAll } from 'rxjs';
@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.css']
})
export class RoomdetailComponent implements OnInit {



  image: string[] = []
  description : string = ""

  BookingDetail: any = {
    userId: undefined,
    roomId: undefined,
    description: undefined,
    bookedDateFrom: Date,
    bookedDateTo: Date
  }

  detail: any | undefined;
  constructor(private route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(({ roomId }) => {
      console.log('The id of this route is: ', roomId);

      this.GetRoom(roomId)

      this.BookingDetail.userId = localStorage.getItem("Hotel_UserId")
      this.BookingDetail.bookedDateFrom = this.convert(localStorage.getItem("fromDate")?? "")
      this.BookingDetail.bookedDateTo = this.convert(localStorage.getItem("toDate") ?? "")

 

      this.BookingDetail.roomId = roomId


      // localStorage.removeItem("toDate")
      // localStorage.removeItem("fromDate")

    });



  }

  descriptionUpdate(event : any){
    this.description = event.target.value
  }

  convert(str: string ) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  GetRoom(roomId: number) {



    axios.get(environment.BaseURL + "GetRoom", { params: { id: roomId } })
      .then(({ data }) => {
        console.log(data);

        this.detail = data.responseData

        this.image = data.responseData.images

        console.log(this.image);

      })
      .catch(err => {
        console.error(err);
      })
  }


  postbooking() {

    this.BookingDetail.description = this.description

    console.log("this.BookingDetail", this.BookingDetail)

    axios.post(environment.BaseURL + 'PostBookingRequest', this.BookingDetail)
      .then((booking) => {
        console.log(booking.data);

        this._router.navigate(['mybookings'])
      })
      .catch(function (error) {
        console.log("error in bookking",error);
      });
  }
}
