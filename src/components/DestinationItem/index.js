import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="destinationContainer">
      <img src={imgUrl} alt={name} className="image" />
      <p className="destinationName">{name}</p>
    </li>
  )
}

export default DestinationItem
