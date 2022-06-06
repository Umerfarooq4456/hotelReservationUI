import { Component, OnInit } from '@angular/core';

import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  images: any = [];
  images1: any = [];
  images2: any = [];
  images3: any = [];

  constructor(private _userService: UserServiceService) {}

  ngOnInit(): void {
    this.GetImages();
  }

  GetImages() {
    this._userService
      .getImages()
      .then(({ data }) => {

        this.images = data.responseData;
        this.images1 = data.responseData.slice(0, data.responseData.length/2);

        console.log(this.images);

        for (var i = 0; i < this.images.length; ++i) {
          if (i % 2 === 0) {
            this.images2.push(this.images[i]);
          } else {
            this.images3.push(this.images[i]);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
