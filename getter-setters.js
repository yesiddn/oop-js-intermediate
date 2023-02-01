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
  const private = {
    _name: name,
  }; 

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
    get name() {
      return private['_name'];
    },
    set name(newName) {
      if (newName.length != 0) {
        private['_name'] = newName;
      } else {
        console.warn('Tu nombre debe contener al menos 1 carácter.');
      }
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
});