import { useState } from 'react'

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

  return (
    animals[Math.floor(Math.random() * animals.length)]
  )
}


function App() {
  const [animals, setAnimals] = useState([])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Add Animals </button>
    </div>
  )
}

export default App;