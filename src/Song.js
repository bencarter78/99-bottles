const capitalise = str => str.charAt(0).toUpperCase() + str.slice(1)

class Container {
  constructor (number, liquid = 'beer') {
    this.number = number
    this.liquid = liquid
  }

  get type () {
    return 'bottles'
  }

  get quantity () {
    return this.number.toString()
  }

  get action () {
    return 'Take one down and pass it around'
  }

  get successor () {
    return factory(this.number - 1)
  }

  toString () {
    return `${this.quantity} ${this.type} of ${this.liquid}`
  }
}
class FinalContainer extends Container {
  constructor () {
    super(1)
  }

  get type () {
    return 'bottle'
  }
}
class Containerless extends Container {
  get quantity () {
    return 'no more'
  }

  get action () {
    return 'Go to the store and buy some more'
  }

  get successor () {
    return factory(99)
  }
}

class SixPack extends Container {
  get type () {
    return 'six pack'
  }

  get quantity () {
    return '1'
  }

  get action () {
    return 'Take one down and pass it around'
  }

  get successor () {
    return factory(5)
  }
}

const factory = (number) => {
  switch (number) {
    case 6:
      return new SixPack()
    case 1:
      return new FinalContainer()
    case 0:
      return new Containerless()
    default:
      return new Container(number)
  }
}

class Song {
  constructor (location = 'on the wall') {
    this.location = location
  }

  sing () {
    return [...Array(99 + 1).keys()]
      .reverse()
      .map(i => this.verse(factory(i)))
      .join('\n\n')
  }

  verse (container) {
    return capitalise([
      `${container} ${this.location}, ${container}`,
      `${container.action}, ${container.successor} ${this.location}`
    ].join('\n'))
  }
}

module.exports = Song
