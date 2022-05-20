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


  detail: any | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(({roomId}) => {
      console.log('The id of this route is: ', roomId);

      this.GetRoom(roomId)

    });


  
}

  GetRoom(roomId: number) {



      axios.get(environment.BaseURL + "GetRoom", { params: { id: roomId } } )
        .then(({ data }) => {
          console.log(data);

          this.detail = data.responseData

      

  
         
        })
        .catch(err => {
          console.error(err);
        })
    }


}
