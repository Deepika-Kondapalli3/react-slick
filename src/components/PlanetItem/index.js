// Write your code here
import './index.css'
const PlanetItem = props => {
  const {planet} = props
  const {id, name, imageUrl, description} = planet
  return (
    <div className="planets">
      <img src={imageUrl} className="image" alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
