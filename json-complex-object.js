const obj1 = {
  a: 'a',
  b: 'b',
  c: {
    d: 'd',
    e: 'e',
  },
  editA() {
    this.a = 'new AAA';
  }
};

const stringifiedComplexObject = JSON.stringify(obj1); // '{"a":"a","b":"b","c":{"d":"d","e":"e"}}'
// retorna un string con el objeto serializado

const obj2 = JSON.parse(stringifiedComplexObject); // { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }
// retorna un objeto a partir de un string

// De esta forma se puede hacer una copia de un objeto sin que exista alguna referencia entre ellos, excepto cuando se trabaja con metodos
// JSON.parse() y JSON.stringify() no pueden serializar funciones, por lo que si se tiene un objeto con funciones, estas no se copiaran