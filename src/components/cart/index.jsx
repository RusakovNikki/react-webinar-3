import React from "react";
import "./style.css";
import Head from "../head";
import Item from "../item";
import List from "../list";
import { cn as bem } from "@bem-react/classname";
import { formatter } from "../../utils";

const Cart = ({ shopCart, onRemoveItem, setOpenPopup }) => {
  const cn = bem("Cart");

  const onRemove = (code) => {
    onRemoveItem(code);
  };

  return (
    <>
      <Head title="Корзина">
        <button className={cn("btn")} onClick={() => setOpenPopup(false)}>
          Закрыть
        </button>
      </Head>
      <div className={cn("box")}>
        <div className={cn("list")}>
          {shopCart.itemsList.map((item) => (
            <Item item={item} key={item.code}>
              <p className={cn("count")}>{item.count} шт</p>
              <button onClick={() => onRemove(item.code)}>Удалить</button>
            </Item>
          ))}
        </div>
        <div className={cn("price")}>
          <b className={cn("result")}>Итого </b>
          <b>{formatter(shopCart.itemsPrice)}</b>
        </div>
      </div>
    </>
  );
};

export default Cart;
