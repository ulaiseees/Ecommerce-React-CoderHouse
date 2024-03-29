import { useState } from "react"


export const Counter = () => {

    const [ contador, setContador ] = useState(0)

    const sumar = () => {
        setContador( contador + 1 )
    }

    const restar = () => {
        if (contador > 1) {
            setContador( contador - 1 )
        }
        else{
            alert("No podés menos de Uno!")
        }
    }

  return (
    <div>
        <button onClick={restar}>Restar</button>
        <h2>{contador}</h2>
        <button onClick={sumar}>Sumar</button>
    </div>
  )
}

export default Counter
