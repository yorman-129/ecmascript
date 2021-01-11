//operador de reposo

const obj = {
    name: 'yorman',
    age: 20,
    country: 'col'
};

let {name, ...all} = obj;
console.log(name,all);

const objt = {
    name: 'yorman',
    age: 20
};

const obj1 = {
    ...objt,
    country: 'col'
}

console.log(obj1);

const helloWorld = () => {
    return new Promise((resolve, reject) => {
      true
        ? setTimeout(() => {
            resolve('Hello World!');
          }, 3000)
        : reject(new Error('Test Error'));
    });
  };
  
  helloWorld()
    .then(resolve => console.log('resolve -> ', resolve))
    .catch(error => console.log('error -> ', error))
    .finally(() => console.log('finalizó'));
  
  /**
   * Regex
   */
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  const match = regexData.exec('2018-04-28');
  const year = match[1];
  const month = match[2];
  const day = match[3];
  console.log('Date -> ', year, month, day);