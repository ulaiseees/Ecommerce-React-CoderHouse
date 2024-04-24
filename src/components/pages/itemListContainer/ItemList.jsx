import { Grid } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard"

const ItemList = ( {items} ) => {
    console.log (items);
    return (
    <div style={ {display: "flex", justifyContent: "space-evenly"}}>
    <Grid container gap={"10px"}>
    {items.map( (item) => {
        return (
        <Grid key={item.id} item>
            <ProductCard 
            title={item.title}
            description={item.description}
            price={item.price}
            img={item.img}
            id={item.id}
            x={12}
            />
        </Grid>
    );
    })}
    </Grid>
    </div>
)
}

export default ItemList