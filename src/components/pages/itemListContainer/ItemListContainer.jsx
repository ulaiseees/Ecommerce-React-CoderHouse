import { useEffect, useState } from "react"
import { products } from "../../../productsMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const {name} = useParams ()
  console.log (name)

  const [items, setItems] = useState([])

  useEffect ( () => {

    let productsFiltered = products.filter( product => product.category === name)

    const getProducts = new Promise ((resolve, reject) => {
      let x = true
      if (x){
        setTimeout (() => {
          resolve (name ? productsFiltered : products);
        }, 200);
      }else {
        reject ("error!")
      }
  
    })
  
    getProducts.then((res)=>setItems(res)).catch((error)=>{console.log(error)})
  }, [name])

  console.log (items)

  return <ItemList items={items}/>
}

export default ItemListContainer