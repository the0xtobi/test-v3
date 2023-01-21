import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={()=> setCount (count + 1)}> Add Animals </button>
      <div>Number of animals: {count}</div>
    </div>
  )
}

export default App;