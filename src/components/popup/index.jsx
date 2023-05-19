import React from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";
import Head from "../head";
import Item from "../item";

const Popup = ({ setOpenPopup, shopCart, onRemoveItem }) => {
  const cn = bem("Popup");
  const sortRef = React.useRef(null);

  const hidePopup = (event) => {
    if (!sortRef.current.innerHTML.includes(event.target.innerHTML)) {
      setOpenPopup(false);
    }
  };

  const onRemove = (item) => {
    onRemoveItem(item);
  };

  return (
    <div className={`${cn()}`} onClick={hidePopup}>
      <div className={cn("container")} ref={sortRef}>
        <Head title="Корзина" />
        <div className={cn("list")}>
          {shopCart.itemsList.map((item) => (
            <Item item={item} key={item.code}>
              <p className={cn("count")}>{item.count} шт</p>
              <button onClick={() => onRemove(item)}>Удалить</button>
            </Item>
          ))}
        </div>
        <div className={cn("price")}>
          <b className={cn("result")}>Итого {shopCart.itemsPrice} ₽</b>
        </div>
      </div>
    </div>
  );
};

export default Popup;
