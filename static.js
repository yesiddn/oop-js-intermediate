/**Metodos y atributos estaticos de prototipos:
 * Por lo general, para acceder a un metodo o atributo de un prototipo, se debe crear una instancia de la clase y luego acceder a los metodos y atributos desde la instancia. Pero con los metodos y atributos estaticos, se puede acceder a ellos sin necesidad de crear una instancia de la clase. 
 * Para crear un metodo o atributo estatico, se debe anteponer la palabra reservada static al metodo o atributo del prototipo.
 * 
 * Ejemplos de metodos y atributos estaticos:
 * Object.keys(obj) es un metodo estatico de la prototipo Object, que permite obtener las propiedades de un objeto.
 * Object.hasOwnProperty(prop) es un metodo estatico del prototipo Object, que permite saber si un objeto tiene una propiedad especifica.
 * Object.getOwnPropertyDescriptors(obj) es un metodo estatico del prototipo Object, que permite obtener los descriptores de las propiedades de un objeto.
 */

const juan = {
  name: 'Juanito',
  age: 20,
  aprovedCourses: ['Curso 1'],
  addCourse(newCourse) {
    this.aprovedCourses.push(newCourse);
  }
}

// console.log(Object.keys(juan)); // ['name', 'age', 'aprovedCourses', 'addCourse']

// console.log(Object.getOwnPropertyNames(juan)); // ['name', 'age', 'aprovedCourses', 'addCourse']

// console.log(Object.entries(juan)); // [['name', 'Juanito'], ['age', 20], ['aprovedCourses', ['Curso 1']], ['addCourse', function addCourse(newCourse) { this.aprovedCourses.push(newCourse); }]]

// console.log(Object.entries(juan)[3][1]); // function addCourse(newCourse) { this.aprovedCourses.push(newCourse); }

// console.log(Object.entries(juan)[3][1]('Curso 2')); // TypeError: cannot read property 'push' of undefined
// Si se imprime this en la funcion se obtiene un array ['addCourse', f]
// Y si se imprime this.approveCourses se obtiene undefined, esto porque this no hace referencia al objeto juan, sino al array ['addCourse', f]

console.log(Object.getOwnPropertyDescriptors(juan)); // {name: {…}, age: {…}, aprovedCourses: {…}, addCourse: {…}} // name: {value: "Juanito", writable: true, enumerable: true, configurable: true}, ...

