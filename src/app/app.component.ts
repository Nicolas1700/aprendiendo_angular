import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aprendiendo Angular';
  name = 'Nicolas';
  age = 18;
  img = 'https://http2.mlstatic.com/D_NQ_NP_740980-MCO31567535004_072019-O.jpg';
  bntDisable = true;
  valueInput = 'Nicolas lo hizo :) ';
  Person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://http2.mlstatic.com/D_NQ_NP_740980-MCO31567535004_072019-O.jpg'
  }
  toggleButton () {
    /* Se niega el estado actual del boton,
    para obtener true o false segun el estado del boton
    */
    this.bntDisable = !this.bntDisable;
  }
  ageMore(){
    this.Person.age += 1;
  }
  ageLees(){
    this.Person.age -= 1;
  }
}
