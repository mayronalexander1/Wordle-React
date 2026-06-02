import { useState } from 'react'

function Contador() {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <p>Llevas {contador} clicks</p>
      <button onClick={() => setContador(contador + 1)}>
        Click aquí
      </button>
    </div>
  )
}

export default Contador
