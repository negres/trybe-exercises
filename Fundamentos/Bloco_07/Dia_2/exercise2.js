const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addMorningShift = (objeto, chave, valor) => {
  objeto[chave] = valor;
  return objeto;
}

// console.log(addMorningShift(lesson2, 'turno', 'manhã'));

const listKeys = (objeto) => {
  const obj = Object.keys(objeto);
  return obj;
}

// console.log(listKeys(lesson3));

const sizeObject = (objeto) => {
  const size = Object.keys(objeto).length;
  return size;
}

// console.log(sizeObject(lesson3));

const listValues = (objeto) => {
  const values = Object.values(objeto);
  return values;
}

// console.log(listValues(lesson3));

const allLessons = {};

const group = (objeto, chave1, chave2, chave3) => {
  objeto.lesson1 = chave1;
  objeto.lesson2 = chave2;
  objeto.lesson3 = chave3;
  return objeto;
}

// console.log(group(allLessons, lesson1, lesson2, lesson3));
// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
const newLessons = group(allLessons, lesson1, lesson2, lesson3);

const totalStudents = (objeto) => {
  let total = 0;
  const arr = Object.keys(objeto);
  for (let index in arr) {
    total = total + objeto[arr[index]].numeroEstudantes;
  }
  return total;
};

// console.log(totalStudents(newLessons));

const getValueKey = (objeto, number) => {
  return Object.values(objeto)[number];
}

// console.log(getValueKey(lesson3, 0));

const verify = (objeto, chave, valor) => {
  if ((objeto) && (objeto[chave]) && (objeto[chave] === valor)) {
    return true;
  }
  return false;
}

console.log(verify(lesson1, 'professor', 'Maria Clara'));
console.log(verify(lesson3, 'materia', 'Matemática'));