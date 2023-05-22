import React from "react";
import { cn as bem } from "@bem-react/classname";
import "./style.css";
import Head from "../head";
import Item from "../item";
import List from "../list";

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
                <button onClick={() => onRemove(item)}>Удалить</button>
              </Item>
            ))}
            {/* <List list={shopCart.itemsList} onClickItem={onRemove} /> */}
          </div>
          <div className={cn("price")}>
            <b className={cn("result")}>Итого </b>
            <b>{shopCart.itemsPrice} ₽</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Popup);
