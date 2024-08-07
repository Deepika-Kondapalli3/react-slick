// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const settings = {
  slidesToShow: 1,
  dots: false,
  slidesToScroll: 1,
}
const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="app-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem planet={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
