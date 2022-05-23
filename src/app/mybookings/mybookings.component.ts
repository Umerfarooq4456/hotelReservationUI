import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
  

  MyBookings : any = []

  constructor() { }

  ngOnInit(): void {


   

    this.booking(parseInt(localStorage.getItem("Hotel_UserId")?? "0"))

  }


  booking(userId : number) {



    axios.get(environment.BaseURL + "GetMyBookings",  { params: { userId: userId } })
      .then(({ data }) => {
        console.log(data);
        
        this.MyBookings = data

        // this._router.navigate(['roomDetail'], data)
      })
      .catch(err => {
        console.error(err);
      })
  }


}
