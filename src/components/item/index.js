import {memo} from "react";
import PropTypes from "prop-types";
import {cn as bem} from '@bem-react/classname';
import {numberFormat, translate} from "../../utils";
import './style.css';

function Item(props) {

  const cn = bem('Item');

  const callbacks = {
    onAdd: (e) => props.onAdd(props.item._id),
    onClickLink: () => props.onClickLink(props.item._id)
  }

  return (
    <div className={cn()}>
      <div className={cn('title')}>
        <a className={cn('link')} onClick={callbacks.onClickLink}>
          {props.item.title}
        </a>
      </div>
      <div className={cn('actions')}>
        <div className={cn('price')}>{numberFormat(props.item.price)} ₽</div>
        <button onClick={callbacks.onAdd}>{translate(props.lang, 'add')}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  onAdd: PropTypes.func,
};

Item.defaultProps = {
  onAdd: () => { },
}

export default memo(Item);
