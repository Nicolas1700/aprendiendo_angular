import { Component } from '@angular/core';
import { product } from './product.model';

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
    name: 'nicolas',
    age: 18,
    avatar: 'https://http2.mlstatic.com/D_NQ_NP_740980-MCO31567535004_072019-O.jpg'
  }

  /* *ngfor con objetos */
  products: product[] = [
    {
      name: 'Aceite',
      price: 18000,
      img: './assets/imgs/aceite.jpg'
    },
    {
      name: 'Aderesos',
      price: 10000,
      img: './assets/imgs/aderesos.jpg'
    },
    {
      name: 'Blanqueador',
      price: 4500,
      img: './assets/imgs/blanqueador.jpg'
    },
    {
      name: 'Desodorante',
      price: 3500,
      img: './assets/imgs/desodorante.jpg'
    },
    {
      name: 'Jugo',
      price: 2000,
      img: './assets/imgs/jugo.jpeg',
    }
  ];

  /* *ngfor */
  names: string[] = ['Nicolas','Pedro','Juliana'];
  newName: string = '';

  /* *ngfor Ejemplo */
  listMerc: string[] = ['Algo'];
  newProduct: string = '';

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

  addName () {
    this.names.push(this.newName);
    this.newName = '';
  }

  deletName(index: number){
    this.names.splice(index,1);
  }

  addListMer () {
    this.listMerc.push(this.newProduct);
    this.newProduct = '';
  }

  deletListMerc (index: number){
    this.listMerc.splice(index,1);
  }


}
