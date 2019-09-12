function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat ();
const Noodles = new Dog ();

// method-style
Noodles.chase(Markov);

// call and apply
Dog.prototype.chase.call(Noodles, Markov);
Dog.prototype.chase.apply(Noodles, [Markov]);
Noodles.chase.call(Noodles, Markov);
Noodles.chase.apply(Noodles, [Markov]);

// turn the tables!
Dog.prototype.chase.call(Markov, Noodles);
Noodles.chase.call(Markov, Noodles);