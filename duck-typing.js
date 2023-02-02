function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
}

function createLearningPath({ name = requiredParam('name'), courses = [] }) {
  const private = {
    _name: name,
    _courses: courses,
  };

  const public = {
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
    get courses() {
      return private['_courses'];
    },
  };
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
    _learningPaths: learningPaths,
  };

  const public = {
    age,
    email,
    approvedCourses,
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
    get learningPaths() {
      return private['_learningPaths'];
    },
    set learningPaths(newLP) {
      // Duck Typing
      if (!newLP.name) {
        console.warn('Tu Learning Path no tiene la propiedad name');
        return;
      }
      
      if (!newLP.courses) {
        console.warn('Tu Learning Path no tiene la propiedad courses');
        return;
      }

      if (!isArray(newLP.courses)) {
        console.warn('Tu Learning Path no es una lista (*de cursos');
        return;
      }
      private['_learningPaths'].push(newLP);
    },
  };

  return public;
}

const juan = createStudent({
  name: 'Juanito',
  email: 'juanito@feliz.com',
});
