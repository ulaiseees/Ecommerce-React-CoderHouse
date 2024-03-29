import ProductCard from "../../common/productCard/ProductCard"

const ItemListContainer = ({saludo}) => {
  return (
    <div 
    style=
    {{width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    backgroundColor: "steelblue",}}>

    <h1> {saludo} </h1>

    <ProductCard 
    titulo={"Producto 1"} 
    descripcion={"Descripción 1"} 
    precio={"$240"}
    />
    <ProductCard 
    titulo={"Producto 2"} 
    descripcion={"Descripción 2"} 
    precio={"$240"}
    />
    <ProductCard 
    titulo={"Producto 3"} 
    descripcion={"Descripción 3"} 
    precio={"$240"}
    />

    </div>
    
  )
}

export default ItemListContainer