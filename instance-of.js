function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
}

function LearningPath({ name = requiredParam('name'), courses = [] }) {
  this.name = name;
  this.courses = courses;
  
  /*
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

  return public;
  */
}

function Student({
  name = requiredParam('name'),
  age,
  email = requiredParam('email'),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  // Duck Typing con instanceof prototype
  if (isArray(learningPaths)) {
    this.learningPaths = [];

    for (const learningPath of learningPaths) {
      if (learningPath instanceof LearningPath) {
        this.learningPaths.push(learningPath);
      }    
    }
  }

  /*
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
  */
}

const escuelaWeb = new LearningPath({
  name: 'Escuela de Desarrollo Web',
  courses: [],
});

const escuelaData = new LearningPath({
  name: 'Escuela de Data Science',
  courses: [],
});

const juan = new Student({
  name: 'Juanito',
  email: 'juanito@feliz.com',
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});
