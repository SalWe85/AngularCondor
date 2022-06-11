import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
  value = 450;

  pitch(event: any) {
    console.log(event.value)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
