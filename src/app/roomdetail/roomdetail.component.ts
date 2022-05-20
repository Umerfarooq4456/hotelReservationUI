import { Component, OnInit , Input} from '@angular/core';

import { ActivatedRoute } from '@angular/router';


import { FormGroup, FormControl, FormBuilder,  Validators } from '@angular/forms';

import { environment } from '../../environments/environment'
import axios from 'axios'
@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.css']
})
export class RoomdetailComponent implements OnInit {


  detail: any = {};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.detail = params['data']);


    console.log("asdasd")

    console.log(this
      .detail)
}




}
