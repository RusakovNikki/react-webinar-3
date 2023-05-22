import React, { useCallback } from "react";
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

  const renderListItems = useCallback((item, onClickItem) => {
    return (
      <Item item={item} key={item.code}>
        <p className={cn("count")}>{item.count} шт</p>
        <button onClick={() => onClickItem(item.code)}>Удалить</button>
      </Item>
    );
  }, []);

  return (
    <>
      <Head title="Корзина">
        <button className={cn("btn")} onClick={() => setOpenPopup(false)}>
          Закрыть
        </button>
      </Head>
      <div className={cn("box")}>
        <div className={cn("list")}>
          <List
            list={shopCart.itemsList}
            onClickItem={onRemove}
            renderListItems={renderListItems}
          />
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
