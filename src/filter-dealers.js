export default ({ distance, dealers }) =>
  dealers.filter((dealer) => dealer.distance < distance)
