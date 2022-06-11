import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  posts = [
    {
      placeholder : 'Player ID',
      value : '1'
    },
    {
      placeholder : 'Username',
      value : 'player'
    },
    {
      placeholder : 'Affiliate ID',
      value : ''
    },
    {
      placeholder : 'Affiliate Username',
      value : ''
    },
    {
      placeholder : 'First Name',
      value : ''
    },
    {
      placeholder : 'Last Name',
      value : ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
