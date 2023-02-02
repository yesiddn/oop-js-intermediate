// Creacion de un metodo estatico  desde un prototipo con la sintaxis de clases
/*
class SuperObject {
  static isObject(subject) {
    return typeof subject == 'object';
  }

  static isArray(subject) {
    return Array.isArray(subject);
  }

  static requiredParam(param) {
    throw new Error(`${param} es obligatorio`);
  }
}
*/
// SuperObject.isObject({}); // true

// Creacion de un metodo estatico  desde un prototipo con la sintaxis de funciones
function SuperObject() {}
SuperObject.isObject = function (subject) {
  return typeof subject == 'object' && !this.isArray(subject); // typeof [] == 'object'
};
SuperObject.isArray = function isArray(subject) {
  return Array.isArray(subject);
};
SuperObject.requiredParam = function requiredParam(param) {
  throw new Error(`${param} es obligatorio`);
};

function LearningPath({ name = requiredParam('name'), courses = [] }) {
  this.name = name;
  this.courses = courses;
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

  // Atributos privados
  const private = {
    _learningPaths: [],
  };

  Object.defineProperty(this, 'learningPaths', {
    // dentro del prototipo Student no es necesarios escribir Student.prototype, ya que this hace referencia a Student
    get() {
      return private['_learningPaths'];
    },
    set(newLP) {
      if (newLP instanceof LearningPath) {
        private['_learningPaths'].push(newLP);
      } else {
        console.warn('El learningPath no es valido');
      }
    },
  });
  // Student.prototype.learningPaths = function

  for (const learningPath of learningPaths) {
    this.learningPaths = learningPath;
  }
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
  learningPaths: [escuelaWeb, escuelaData],
});
