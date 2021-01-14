const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));

const myObject = {
  name: 'Natalia',
  lastname: 'Negreiros',
  state: 'CE',
  city: 'Fortaleza',
  address: 'Rua 426',
};

const myObjectValues = (objValues) => Object.values(objValues);
const myObjectKeys = (objKeys) => Object.keys(objKeys);
const myObjectEntries = (objEntries) => Object.entries(objEntries);

console.log(myObjectValues(myObject));
console.log(myObjectKeys(myObject));
console.log(myObjectEntries(myObject));
console.log(myObjectEntries(myObject)[0]);