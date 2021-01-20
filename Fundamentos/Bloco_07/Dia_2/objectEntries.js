const myObject = {
  name: 'Natalia',
  lastname: 'Negreiros',
  state: 'CE',
  city: 'Fortaleza',
  address: 'Rua 426',
};

const myObjectEntries = (objEntries) => Object.entries(objEntries);
console.log(myObjectEntries(myObject));
console.log(myObjectEntries(myObject)[0]);

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};

const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(let index in pairKeyValue) {
  console.log('---------');
  console.log(`País: ${pairKeyValue[index][0]}`);
  console.log(`Capital: ${pairKeyValue[index][1]}`);
};

