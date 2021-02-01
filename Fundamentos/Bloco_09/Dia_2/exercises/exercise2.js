const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const array = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = array.map(number => number * number)
      .reduce((number, acc) => number + acc, 0);
    (sum < 8000) ? resolve() : reject();
  });
}