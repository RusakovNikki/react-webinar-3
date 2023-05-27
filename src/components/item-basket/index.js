import {memo, useCallback} from 'react';
import propTypes from 'prop-types';
import {numberFormat, translate} from "../../utils";
import {cn as bem} from "@bem-react/classname";
import PropTypes from "prop-types";
import './style.css';
import {Link} from 'react-router-dom';
import useSelector from '../../store/use-selector';

function ItemBasket(props) {
  const lang = useSelector((state) => state.lang.lang);
  const cn = bem('ItemBasket');

  const callbacks = {
    onRemove: (e) => props.onRemove(props.item._id),
    onSelect: () => props.closeModal()
  };

  return (
    <div className={cn()}>
      <div className={cn('title')}>
        <Link to={`/about/${props.item._id}`} onClick={callbacks.onSelect}>
          {props.item.title}
        </Link>
      </div>
      <div className={cn('right')}>
        <div className={cn('cell')}>{numberFormat(props.item.price)} ₽</div>
        <div className={cn('cell')}>{numberFormat(props.item.amount || 0)} шт</div>
        <div className={cn('cell')}><button onClick={callbacks.onRemove}>{translate(lang, 'dell')}</button></div>
      </div>
    </div>
  )
}

ItemBasket.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number
  }).isRequired,
  onRemove: propTypes.func,
}

ItemBasket.defaultProps = {
  onRemove: () => { },
}

export default memo(ItemBasket);
