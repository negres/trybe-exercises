let singer = {
  name: 'Milton',
  lastName: 'Nascimento',
  nickname: 'Bituca',
  age: 77,
  bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas']
};
console.log(singer.lastName)
console.log(singer['name'])

singer['fullname'] = singer.name + ' ' + singer.lastName;

console.log(singer)