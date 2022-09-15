import getRandomValue from './random-value.js'

export default class RandomDealer {
  constructor ({ amount }) {
    this.amount = amount
  }

  randomDealer ({ index }) {
    return {
      name: `Random ${index}`,
      location: {
        latitude: getRandomValue(50, 53),
        longitude: getRandomValue(4, 7)
      }
    }
  }

  * generator () {
    let index = 0
    while (index < this.amount) {
      index++
      yield this.randomDealer({ index })
    }
  }
}
