import React from "react";
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function Controls({ shopCart, onOpenPupup }) {
  const cn = bem('Controls');

  return (
    <div className={cn()}>
      <p>В корзине:</p>
      {
        shopCart.itemsCount ?
          <b>{shopCart.itemsCount} товара / {shopCart.itemsPrice} ₽</b> :
          <b>пусто</b>
      }
      <button className={cn('btn')} onClick={() => onOpenPupup()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  shopCart: PropTypes.shape({
    itemsCount: PropTypes.number,
    itemsPrice: PropTypes.number
  }).isRequired,
  onOpenPupup: PropTypes.func
};

Controls.defaultProps = {
  onOpenPupup: () => { }
}

export default React.memo(Controls);
