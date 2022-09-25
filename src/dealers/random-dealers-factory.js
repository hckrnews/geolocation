import RandomDealer from './random-dealer.js'

export default ({ amount }) => {
  // Seed random dealers
  console.time('seedDealers')
  const dealerFactory = new RandomDealer({ amount })
  const randomDealers = []
  for (const dealer of dealerFactory.generator()) {
    randomDealers.push(dealer)
  }
  console.timeEnd('seedDealers')

  return randomDealers
}
