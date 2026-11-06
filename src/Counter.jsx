// counter.jsx
import { useState } from 'react'

 function Counter() {
  const [v, setV] = useState({ a: 0, b: 0 })
  const inc = (c) => setV(p => ({ ...p, [c]: p[c] + 1 }))

  return (
    <div>
      <p>Candidate A: {v.a} <button onClick={() => inc('a')}>Vote</button></p>
      <p>Candidate B: {v.b} <button onClick={() => inc('b')}>Vote</button></p>
    </div>
  )
}
export default Counter
