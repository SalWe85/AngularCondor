import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.css']
})
export class InputValueComponent implements OnInit {
  length = 0;
  username = '';

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    if(!isNaN(parsedValue))
      this.length = parsedValue;   
      
    if (this.length < 2) {
      this.username = String(this.length);
    }else {
      this.username = '';
    }
  }

  @Input() placeholder = '';
  @Input() value = '';
  @Input() disabled = '';


  constructor() { }

  ngOnInit(): void {
    
  }
  

}
