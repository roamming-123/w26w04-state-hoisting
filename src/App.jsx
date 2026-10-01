import './App.css'
import { useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0)
  return (
    //이름하고 값이 쌍으로 있는거 NV-PAIR
    <div>
      <Counter
      count={count}
      onIncrement= {() => setCount(prev => prev + 1)}
      />
    </div>
  )
}

function Counter({count, onIncrement}) {
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button
      onClick={onIncrement}>clock
    </button>
    </div>
  )
}

export default App
