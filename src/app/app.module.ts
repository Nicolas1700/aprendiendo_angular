import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Importamos el modulo de FormsModule
  y lo  agregamos al imports */
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    /* Aca se agrega */
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
