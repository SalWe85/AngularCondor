import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { InputValueComponent } from './input-value/input-value.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    InputValueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
