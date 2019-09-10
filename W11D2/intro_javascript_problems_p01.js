// Mystery Scoping with var, let, const

function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';  
    console.log(x);
  }
  console.log(x);
}

/* 
  mysteryScoping1()
  output: 'in block'; 'in block' 
  because var declares functionally scoped variable, which gets overwritten 
  inside if block
*/

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

/*
  mysteryScoping2()
  output: 'in block'; 'out of block'
  because const declares block scoped variable
*/

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

/*
  mysteryScoping3()
  output: 'SyntaxError: Identifier 'x' has already been declared'
  because const cannot be re-declared
*/

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

/*
  mysteryScoping4()
  output: 'in block', 'out of block'
  because let declares block scoped variable
*/

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}

/*
  mysteryScoping5()
  output: 'SyntaxError: Identifier 'x' has already been declared'
  because let cannot be declared twice in the same block
*/

function madLib(verb, adjective, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}.`)
}

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

function fizzBuzz(array) {
  result = [];
  array.forEach(el => {
    if ((el % 3 === 0 || el % 5 === 0) && !(el % 3 === 0 && el % 5 === 0)) {
      result.push(el);
    }
  });
  return result;
}

function isPrime(number) {
  if (number === 1) {
    return false;
  }

  for(let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function sumOfNPrimes(n) {
  let sum = 0;
  let prime = 1;
  let prime_count = 0;
  while (prime_count < n) {
    if (isPrime(prime)) {
      sum += prime;
      prime_count++;
    }
    prime++;
  }
  return sum;
}