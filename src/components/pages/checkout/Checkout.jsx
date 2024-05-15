import { Button, TextField } from "@mui/material";
import { useState } from "react"


export const Checkout = () => {

    const [info, setInfo] = useState({
        nombre: "",
        telefono:"",
        email:"",
        });


    const handleChange = (e)=>{
        let {name, value} = e.target

        setInfo({...info, [name]: value})
    }


    const handleSubmit = (e) => {
        e.preventDefault()

}
return (
    <div>
        <form onSubmit={ handleSubmit }>
            <TextField
            variant="outlined"
            type="text" 
            label="Nombre"
            onChange={handleChange}
            name="nombre" />

            <TextField
            variant="outlined"
            type="text"
            label="Telefono"
            onChange={handleChange}
            name="telefono" />

            <TextField
            variant="outlined"
            type="text"
            label="Email"
            onChange={handleChange}
            name="email" />

            <Button variant="contained" type="submit">Comprar Ahora</Button>
        </form>
    </div>
)

}

export default Checkout