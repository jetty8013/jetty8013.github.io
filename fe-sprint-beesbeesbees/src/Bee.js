const Grub = require('./Grub');

class Bee extends Grub {
  // TODO..
  constructor() {
    super()

    this.age = 5
    this.color = "yellow"
    this.job = "Keep on growing"
  }

  eat() { return 'oh yes!' }
}

module.exports = Bee;