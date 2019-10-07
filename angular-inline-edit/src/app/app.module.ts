import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditInputComponent } from './edit-input/edit-input.component';
import { AutofocusDirective } from './autofocus.directive';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EditInputComponent, AutofocusDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
