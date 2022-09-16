import getDistanceBetween from './helpers/distance-between.js'

export default ({ position, dealers }) => dealers
  .map(dealer => {
    const distanceBetween = getDistanceBetween({ coords: position.coords, location: dealer.location })
    return { ...dealer, distance: distanceBetween }
  })
