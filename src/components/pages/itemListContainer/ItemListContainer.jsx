import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { CircularProgress, Skeleton } from "@mui/material";
import { db } from "../../../firebaseconfig";

import {collection, getDocs, query, where} from "firebase/firestore"



const ItemListContainer = () => {

  const {name} = useParams ()

  const [items, setItems] = useState([])
  const [error] = useState(null);

  useEffect ( () => {

    const productsCollection = collection(db, "products");
    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      }); 
      setItems(newArray);
    });
  }, [name]);

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