import { Injectable } from '@angular/core';

import axios from 'axios'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }


  getUserProfile(){

    console.log("calling fromthe service")

    const result = 
    axios
    .get(environment.BaseURL + 'GetAccountByUserId', {
      params: { userId: localStorage.getItem("Hotel_UserId") },
    })

    result.then(({data}) =>{

      if(data.responseCode != 200){
        console.log("from Service" ,data)

      }
     

    })
    

    return result;

  }


  getImages(){

    var result = axios.get(environment.BaseURL + 'GetImages')

    return result;

  }


}
