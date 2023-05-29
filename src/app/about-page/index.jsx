import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import { translate } from "../../utils";
import ProductLayout from "../../components/product-layout";

const AboutPage = () => {
  const { id } = useParams();
  const store = useStore();
  const select = useSelector((state) => ({
    data: state.item.data,
    lang: state.lang.lang,
  }));

  useEffect(() => {
    store.actions.item.load(id);
  }, [id]);
  const callbacks = {
    addToBasket: useCallback(
      (_id) => store.actions.basket.addToBasket(_id),
      [store]
    ),
  };

  return <ProductLayout select={select} addToBasket={callbacks.addToBasket} />;
};

export default AboutPage;
