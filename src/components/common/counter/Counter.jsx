import { useState } from "react"
import CounterPresentacional from "./CounterPresentacional"


export const Counter = ( {stock, initial=1, onAdd} ) => {
    
    const [ contador, setContador ] = useState(initial)

    const sumar = () => {
        if(contador < stock){
            setContador( contador + 1 )
        } else {
            alert("No hay más Stock!")
        }
    }

    const restar = () => {
        if (contador > 1) {
            setContador( contador - 1 )
        }
        else{
            alert("No podés menos de Uno!")
        }
    }

    

    let objectProps = {
        restar,
        sumar,
        contador,
        onAdd
    };

  return (
    <CounterPresentacional {...objectProps}/>
  )
}

export default Counter
