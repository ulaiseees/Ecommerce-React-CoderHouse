import { useEffect, useState } from "react"
import { products } from "../../../productsMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { CircularProgress, Skeleton } from "@mui/material";


const ItemListContainer = () => {

  const {name} = useParams ()

  const [items, setItems] = useState([])
  const [error, setError] = useState(null);

  useEffect ( () => {

    let productsFiltered = products.filter( product => product.category === name)

    const getProducts = new Promise ((resolve, reject) => {
      let x = true
      if (x){
        setTimeout (() => {
          resolve (name ? productsFiltered : products);
        }, 3000);
      }else {
        reject ("error!")
      }
  
    })
  
    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, [name])


  if (items.length === 0) {
    return (
      <div style={{ display: "flex", gap: "25px" }}>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={100}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={100}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={200}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={300}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={100}
          />
        </div>
      </div>
    );
  }

return (
  <>
    {items.length > 0 ? (
      <ItemList items={items} error={error} />
    ) : (
      <CircularProgress />
    )}
  </>
);
};

export default ItemListContainer;