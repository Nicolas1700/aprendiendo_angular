import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  /* Metodo de scroll, en el cual caputaramos el evento */
  onScroll( event: Event){
    /* Guaramos en element el target el (elemento) HTML,
    y este se va a comportar como un HTMLElement */
    const element = event.target as HTMLElement;
    /* Miramos el scroll top del elemento */
    console.log(element.scrollTop);
  }

  /* Metoto keyup del input*/
  changeName( event:Event ){
    /* Caputaramos el input */
    const element = event.target as HTMLInputElement;
    this.Person.name = element.value;
  }

  /* Data [(binding)] */


}
