// Shallow Copy (copia superficial) se refiere a la forma de crear un nuevo objeto a partir de las propiedades de otro. Esta copia solo se hace a un nivel alto, no se hace con objetos dentro de objetos (nested objects), lo que provoca que la modificación de una de sus propiedades, modifique el objeto principal.

// Crear una copia superficial de un objeto de manera manual

const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e'
  }
};

const obj2 = {};
for (prop in obj1) {
  obj2[prop] = obj1[prop];
} // si se modifica obj1, obj2 no se verá afectado en el primer nivel, si se modifica obj1.c, obj2.c se verá afectado

// Crear una copia superficial de un objeto con un metodo estatico del super prototipo Object
const obj3 = Object.assign({}, obj1); // se tiene el mismo problerma de profundidad que con el for in del obj2

const obj4 = Object.create(obj1); // {}, las propiedades aparecen en la propiedad __proto__ de obj1, basicamente las propiedades de obj1 se heredan a obj4
// {__proto__: {a: 'a', b: 'b', c: {d: 'd', e: 'e'}}}
// si se modifica obj4.a = 'AAA', se creara la propiedad a en obj4, pero la propiedad a de obj1 no se verá afectada. {{a: 'AAA'}, __proto__: {a: 'a', b: 'b', c: {d: 'd', e: 'e'}}, es una clase de polimorfismo
// si se modifica alguna propiedad de obj1 se verá reflejado en obj4, ya que obj4 hereda las propiedades de obj1