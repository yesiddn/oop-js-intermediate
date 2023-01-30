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

// console.log(Object.getOwnPropertyDescriptors(juan)); // {name: {…}, age: {…}, aprovedCourses: {…}, addCourse: {…}} // name: {value: "Juanito", writable: true, enumerable: true, configurable: true}, ...

Object.defineProperty(juan, 'navigator', {
  value: 'Chrome',
  enumerable: false, // No se muestra en el array de propiedades, por ejemplo con Object.keys() pero si en Object.getOwnPropertyNames()
  writable: true,
  configurable: true,
});

Object.defineProperty(juan, 'editor', {
  value: 'VSCode',
  enumerable: true,
  writable: false, // No se puede modificar el VALOR de la propiedad pero si se puede eliminar (delete juan.editor -> true)
  configurable: true,
});

Object.defineProperty(juan, 'terminal', {
  value: 'WSL',
  enumerable: true,
  writable: true,
  configurable: false, // Impide que se puedan eliminar propiedades de un objeto (delete juan.terminal -> false)
});

Object.defineProperty(juan, 'pruebaNasa', {
  value: 'extraterrestres',
  enumerable: false,
  writable: false,
  configurable: false,
});

Object.seal(juan); // Cambia en todas las propiedades del objeto el atributo configurable a false, es decir, no se pueden eliminar propiedades del objeto

Object.freeze(juan); // Cambia en todas las propiedades del objeto el atributo configurable y writable a false, es decir, no se pueden eliminar propiedades del objeto y no se pueden modificar los valores de las propiedades

console.log(Object.getOwnPropertyDescriptors(juan));

// Con estas propiedades de Object se puede mejorar el encapsulamiento de los objetos.