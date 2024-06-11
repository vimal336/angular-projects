import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    EmiCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
