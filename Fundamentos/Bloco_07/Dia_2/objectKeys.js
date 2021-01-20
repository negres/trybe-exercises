const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(i in arrayOfSkills){
    console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);

const person = {
  name: 'Matheus',
  lastname: 'Lucena',
  age: 26,
  love: true,
};

const listPeople = (person) => {
  const arrPerson = Object.keys(person);
  for(i in arrPerson) {
    console.log(`Love of my life ${person[arrPerson[i]]}`);
  }
};

listPeople(person);