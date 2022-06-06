import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'Hotel-Reservation';

  IsLoginedIn : boolean = false;

  imageSrc = 'assets/imagess/bookit (8).png'  
   imageAlt = 'logo'


  ngOnInit(): void {

 
   
    var userId = localStorage.getItem("Hotel_UserId")

    if(userId !=  null){
      this. IsLoginedIn = true;
    }

  }

  Logout(){

    console.log("Logging out")

    localStorage.removeItem("Hotel_UserId")
  }



}
