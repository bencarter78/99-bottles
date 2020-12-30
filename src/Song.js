const capitalise = str => str.charAt(0).toUpperCase() + str.slice(1)

class VesselQuantity {
  constructor (number) {
    this.number = number
  }

  vessel () {
    return this.number === 1 ? 'bottle' : 'bottles'
  }

  quantity () {
    return this.number === 0 ? 'no more' : this.number.toString()
  }

  action () {
    return this.number === 0 ? 'Go to the store and buy some more' : 'Take one down and pass it around'
  }

  successor () {
    return this.number === 0 ? 99 : this.number - 1
  }
}

class Song {
  sing () {
    return [...Array(99 + 1).keys()].reverse().map(i => this.verse(i)).join('\n\n')
  }

  verse (number) {
    const current = new VesselQuantity(number)
    const successor = new VesselQuantity(current.successor())
    return `${capitalise(current.quantity())} ${current.vessel()} of beer on the wall, ${current.quantity()} ${current.vessel()} of beer
${current.action()}, ${successor.quantity()} ${successor.vessel()} of beer on the wall`
  }
}

module.exports = Song
