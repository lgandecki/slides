// Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeNoise() {
    return `${this.name} makes noise!`
  }
}

// Extend class
class Dog extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  makeNoise() {
    return `${this.color} ${this.name} barks!`
  }
}
