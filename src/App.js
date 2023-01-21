import { useState } from 'react'
import AnimalShow from './AnimalShow'

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

  return (
    animals[Math.floor(Math.random() * animals.length)]
  )
}



function App() {
  const [animals, setAnimals] = useState([])

  const renderedAnimals = animals.map((animal, index)=>{
    return(
      <AnimalShow type={animal} key={index} />
    )
  })
  return (
    <div>
      <button onClick={() => setAnimals([...animals, getRandomAnimal()])}> Add Animals </button>
      <div>{renderedAnimals}</div>
    </div>
  )
}

export default App;