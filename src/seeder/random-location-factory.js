import RandomLocation from './random-location.js'

export default ({ amount }) => {
  // Seed random locations
  console.time('seedLocations')
  const locationFactory = new RandomLocation({ amount })
  const randomLocations = []
  for (const location of locationFactory.generator()) {
    randomLocations.push(location)
  }
  console.timeEnd('seedLocations')

  return randomLocations
}
