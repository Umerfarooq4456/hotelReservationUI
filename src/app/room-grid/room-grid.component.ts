import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-room-grid',
  templateUrl: './room-grid.component.html',
  styleUrls: ['./room-grid.component.css']
})
export class RoomGridComponent implements OnInit {


@Input() rooms : Array<any> = []

  constructor() { }

  ngOnInit(): void {


    console.log(this.rooms)

  }

}
