import { Button } from "@mui/material";


const CounterPresentacional = ( {restar, sumar, contador, onAdd } ) => {
    return (
      <div>
        <Button onClick={restar} variant="outlined">restar</Button>
        <h2>{contador}</h2>
        <Button onClick={sumar} variant="outlined">sumar</Button>
        <Button onClick={()=>onAdd(contador)} variant="outlined">Agregar al carrito</Button>
      </div>
    );
  };
  
  export default CounterPresentacional;