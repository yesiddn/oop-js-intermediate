function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
}

function createStudent({
  name = requiredParam('name'),
  age,
  email = requiredParam('email'),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {

  // namespaces: es la forma de definir que alcance tienen algunas variables para que se puedan editar en el futuro
  const private = {
    '_name': name,
  }; // De esta forma se aplica algo de encapsulamiento a nuestras variables

  const public = {
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    readName() {
      // return private._name; // Funciona escribiendo el nombre de la variable asi, pero es mejor usar la notación de corchetes
      return private['_name'];
    },
    chageName(newName) {
      private['_name'] = newName;
    },
  };

  Object.defineProperty(public, 'readName', {
    writable: false,
    configurable: false,
  });

  Object.defineProperty(public, 'ChangeName', {
    writable: false,
    configurable: false,
  });

  return public;
}

const juan = createStudent({
  name: 'Juanito',
  email: 'juanito@feliz.com',
}); // {} -> se envian argumentos

// For more information about module patterns, visit:
// https://javascript.plainenglish.io/data-hiding-with-javascript-module-pattern-62b71520bddd