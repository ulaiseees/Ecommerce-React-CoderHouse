import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ( {title, description, price, img, id} ) => {

return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
    sx={{ height: 140 }}
    component={"img"}
    image={img}
    title={title}
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
        {title}
    </Typography>
    <Typography variant="body2" color="text.secondary">
        {description}
    </Typography>
    <Typography variant="body2" color="text.secondary">
        ${price}
    </Typography>
    </CardContent>
    <CardActions>
            <Link to={`/itemDetail/${id}`}>
                <Button size="small">Ver Producto</Button> 
            </Link>
        </CardActions>
    </Card>
)}

export default ProductCard