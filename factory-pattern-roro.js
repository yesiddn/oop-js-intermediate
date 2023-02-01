function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
}

// RORO: Receive an Object Return an Object
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
  // De esta forma evitamos que se rompa el código si no se envía un objeto con al menos un argumento -> parametros necesarios para realizar algún procedimiento
  return {
    name,
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
  };
}

const juan = createStudent({
  name: 'Juanito',
  email: 'juanito@feliz.com',
}); // {} -> se envian argumentos
