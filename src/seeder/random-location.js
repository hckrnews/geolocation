import getRandomValue from '../helpers/random-value.js'

export default class RandomLocation {
  constructor ({ amount }) {
    this.amount = amount
  }

  randomLocation ({ index }) {
    return {
      name: `Random ${index}`,
      location: {
        latitude: getRandomValue(50000, 53000) / 1000,
        longitude: getRandomValue(4000, 7000) / 1000
      }
    }
  }

  * generator () {
    let index = 0
    while (index < this.amount) {
      index++
      yield this.randomLocation({ index })
    }
  }
}
