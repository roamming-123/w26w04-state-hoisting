import './App.css'
import { useState } from 'react'

function App() {
  
  const [count0, setCount1] = useState(0)
  const [count1, setCount2] = useState(1)
  return (
    //이름하고 값이 쌍으로 있는거 NV-PAIR
    <div>
            <h1>총합: {count0 + count1}</h1>
      <Counter
      count={count0}
      onIncrement= {() => setCount1(prev => prev + 1)}
      />

      <Counter
            count={count1}
            onIncrement= {() => setCount2(prev => prev + 1)}
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
