import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {

    const {id} = useParams ()
    console.log (id)

    const [item, setItem] = useState ({})

    useEffect (() => {
      let itemEncontrado = products.find( (product) => product.id === +id)

      const getProduct = new Promise ((resolve, reject) => {
        if(itemEncontrado === undefined)
        reject("Producto no Encontrado!")
      else{
        resolve(itemEncontrado)
      }})

      getProduct.then((res) => setItem(res))

    }, [id])

    console.log (item)
  

  return <ItemDetail item={item}/>
};

export default ItemDetailContainer