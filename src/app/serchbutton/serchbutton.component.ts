import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serchbutton',
  templateUrl: './serchbutton.component.html',
  styleUrls: ['./serchbutton.component.css']
})
export class SerchbuttonComponent implements OnInit {

  cards = [
    {title: 'Title 1', content: 'Content 1'},
    {title: 'Title 2', content: 'Content 2'},
    {title: 'Title 3', content: 'Content 3'},
    {title: 'Title 4', content: 'Content 4'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
