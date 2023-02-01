function isObject(subject) {
  return typeof subject == 'object';
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}


const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

const juan = deepCopy(studentBase);
// Object.defineProperty(juan, 'name', {
//   value: 'Juanito',
//   configurable: false,
// });

Object.seal(juan); // De esta forma evitamos escribir todo lo anterior
Object.isSealed(juan); // true, de esta forma verificamos si todas las propiedades del objeto tienen configurable: false
Object.isFrozen(juan); // false, de esta forma verificamos si todas las propiedades del objeto tienen configurable: false y writable: false
juan.name = 'JuanDC';