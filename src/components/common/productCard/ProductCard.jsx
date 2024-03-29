const ProductCard = ( props ) => {
    console.log (props)
    const {titulo, descripcion, precio} = props

return (
    <div>
        <h3>{titulo}</h3>
        <h4>{descripcion}</h4>
        <h4>{precio}</h4>
    </div>
);
}

export default ProductCard