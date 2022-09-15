import getDistanceBetween from './distance-between.js'

export default ({ position, distance, dealers }) => dealers.filter(dealer => {
  const distanceBetween = getDistanceBetween({ coords: position.coords, location: dealer.location })
  return distanceBetween < distance
})
