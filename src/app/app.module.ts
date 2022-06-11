import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { InputValueComponent } from './input-value/input-value.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlidersComponent } from './sliders/sliders.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    InputValueComponent,
    SlidersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
