import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { cn as bem } from "@bem-react/classname";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { translate } from "../../utils";

const AboutPage = () => {
  const cn = bem("AboutPage");
  const { id } = useParams();
  const store = useStore();
  const select = useSelector((state) => state.item.data);
  const lang = useSelector((state) => state.lang.lang);

  useEffect(() => {
    store.actions.item.load(id);
  }, [id]);
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
        {translate(lang, "country")}: <b>{select?.madeIn?.title}</b>
      </p>
      <p>
        {translate(lang, "category")}: <b>{select?.category?.title}</b>
      </p>
      <p>
        {translate(lang, "year")}: <b>{select?.edition}</b>
      </p>
      <h3>
        {translate(lang, "price")}: {select?.price} Р
      </h3>
      <button onClick={() => callbacks.addToBasket(select?._id)}>
        {translate(lang, "add")}
      </button>
    </div>
  );
};

export default AboutPage;
