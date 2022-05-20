import { Component, Input, OnInit, Output } from '@angular/core';

import axios from 'axios'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.css']
})
export class RoomGridComponent implements OnInit {

  RoomDetail : any = {}

@Input() rooms : Array<any> = []

  constructor(private _router: Router) { }

  ngOnInit(): void {


    console.log(this.rooms)

  }
  GetRoom(roomId: number) {



    axios.get(environment.BaseURL + "GetRoom", { params: { id: roomId } } )
      .then(({ data }) => {
        console.log(data);

        this._router.navigate(['roomDetail'],data)
      })
      .catch(err => {
        console.error(err);
      })
  }

}
