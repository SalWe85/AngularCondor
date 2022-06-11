import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {

  @Input() placeholder = '';
  @Input() value = '';

  constructor() { }

  ngOnInit(): void {
  }

}
