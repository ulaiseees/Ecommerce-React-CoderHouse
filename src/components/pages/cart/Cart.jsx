import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"


const Cart = ({cart, clearCart, deleteById, total}) => {
  

  const clearCartAlert = ()=>{
    Swal.fire({
      position:"center",
      showConfirmButton: true,
      showDenyButton: true,
      title:"¿Seguro que quieres Limpiar el Carrito?",
      confirmButtonText:"Si, Limpiar",
      denyButtonText:"No, dejar como estaba"
    }).then((resultado)=>{
      if(resultado.isConfirmed){
        clearCart()
        Swal.fire({
          title:"El Carrito fue Limpiado",
          icon: "success",
        })
      }else if (resultado.isDenied){
        Swal.fire({
          title:"El Carrito no fue Limpiado",
          icon: "info",
        })
      }
    })
    
  }

  return (
    <div>
    
    <h1>Carrito</h1>

    {cart.map((product) => (
    <div key={product.id} style={{border: "2px solid black"}}>
        <h4>{product.title}</h4>
        <h5>${product.price}</h5>
        <h5>{product.quantity}</h5>
        <button onClick={ () => deleteById(product.id) }>Eliminar</button>
      </div>
    ))}

    <h2>El total a pagar es ${total}</h2>

    <Button onClick={clearCartAlert} variant="contained">Limpiar Carrito</Button>
    

    {
    cart.length > 0 && (
    <Link to="/checkout">
        <Button variant="contained">Finalizar Compra</Button>
    </Link>)}


    </div>
  )
}

export default Cart;