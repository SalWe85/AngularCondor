import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {


  posts = [
    {
      placeholder : 'Player ID',
      value : '1',
      disabled : 'disabled'
    },
    {
      placeholder : 'Username',
      value : 'player',
      disabled : 'disabled'
    },
    {
      placeholder : 'Affiliate ID',
      value : '',
      disabled : 'disabled'
    },
    {
      placeholder : 'Affiliate Username',
      value : '',
      disabled : 'disabled'
    },
    {
      placeholder : 'First Name',
      value : '',
      disabled : ''
    },
    {
      placeholder : 'Last Name',
      value : '',
      disabled : ''
    }
  ]

  onButtonClick() {
   
    console.log("dfalfjdlsfj")
  }

  constructor() { }
 

  ngOnInit(): void {
  }

}
