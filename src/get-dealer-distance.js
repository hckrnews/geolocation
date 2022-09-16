import getDistanceBetween from './helpers/distance-between.js'

export default ({ position, dealers }) => dealers
  .map(dealer => ({
    ...dealer,
    distance: getDistanceBetween({
      coords: position.coords,
      location: dealer.location
    })
  }))
