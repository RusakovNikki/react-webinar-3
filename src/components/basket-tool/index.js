import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat, plural} from "../../utils";
import './style.css';
import {Link} from 'react-router-dom';
import {translate} from '../../utils'
import useSelector from '../../store/use-selector';


function BasketTool({sum, amount, onOpen, onClickLink}) {
  const cn = bem('BasketTool');
  const lang = useSelector((state) => state.lang.lang);

  return (
    <div className={cn()}>
      <Link to="/" className={cn("link")} onClick={onClickLink}>
        {translate(lang, 'main')}
      </Link>
      <div className={cn('cart')}>
        <span className={cn('label')}>{translate(lang, 'cart')}:</span>
        <span className={cn('total')}>
          {amount
            ? `${amount} ${plural(amount, {one: 'товар', few: 'товара', many: 'товаров'})} / ${numberFormat(sum)} ₽`
            : translate(lang, 'пусто')
          }
        </span>
        <button onClick={onOpen}>{translate(lang, 'go')}</button>
      </div>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number
};

BasketTool.defaultProps = {
  onOpen: () => { },
  sum: 0,
  amount: 0
}

export default memo(BasketTool);
