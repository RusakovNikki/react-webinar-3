import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { cn as bem } from "@bem-react/classname";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import useStore from "../../../../store/use-store";
import useSelector from "../../../../store/use-selector";

const AboutPage = () => {
  const cn = bem("AboutPage");
  const { id } = useParams();
  const store = useStore();
  const select = useSelector((state) => state.item.data);

  useLayoutEffect(() => {
    store.actions.item.load(id);
  }, []);
  const callbacks = {
    addToBasket: useCallback(
      (_id) => store.actions.basket.addToBasket(_id),
      [store]
    ),
  };

  return (
    <div className={cn()}>
      <p>{select?.description}</p>
      <p>
        Страна производитель: <b>{select?.madeIn?.title}</b>
      </p>
      <p>
        Категория: <b>{select?.category?.title}</b>
      </p>
      <p>
        Год выпуска: <b>{select?.edition}</b>
      </p>
      <h3>Цена: {select?.price} Р</h3>
      <button onClick={() => callbacks.addToBasket(select?._id)}>
        Добавить
      </button>
    </div>
  );
};

export default AboutPage;
