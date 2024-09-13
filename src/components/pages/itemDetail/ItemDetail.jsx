import Counter from "../../common/counter/Counter";
import "./ItemDetail.css"

const ItemDetail = ({ item, initial, onAdd }) => {
  return (
    <div>
      <div className={"containerItemDetail"}>
        <div className={"containerImage"}>
          <img src={item.img} alt="" />
        </div>

        <div className={"containerDetail"}>
          <h2>
            <span>Nombre:</span> {item.title}
          </h2>
          <h2>
            <span>Descripcion:</span>{" "}
            {item.description}
          </h2>
          <h2>
            <span>Precio:</span> ${item.price}.-
          </h2>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Counter stock={item.stock} onAdd={onAdd} initial={initial} />
      </div>
    </div>
  );
};

export default ItemDetail;