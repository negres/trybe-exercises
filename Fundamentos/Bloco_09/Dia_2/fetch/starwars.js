fetch('https://swapi.dev/api/people/4')
  .then((response) => {
    if (!response.ok) throw new Error('Erro ao executar requisição');
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error))