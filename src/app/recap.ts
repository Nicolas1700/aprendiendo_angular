
const userName: string = 'Nicolas';

const sum = ( a:number , b: number ): number => {
  return a + b;
}
sum(12,23);

// clase Person 
class Person {
  constructor ( public age:number, public lasName:string) {}

}

const nico = new Person (19,'Nicoloas');
nico.age;
