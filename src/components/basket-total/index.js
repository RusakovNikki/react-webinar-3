import {memo} from "react";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import {numberFormat, translate} from "../../utils";
import './style.css';
import useSelector from '../../store/use-selector';

function BasketTotal({sum}) {
  const cn = bem('BasketTotal');
  const lang = useSelector((state) => state.lang.lang);

  return (
    <div className={cn()}>
      <span className={cn('cell')}>{translate(lang, 'total')}</span>
      <span className={cn('cell')}> {numberFormat(sum)} ₽</span>
      <span className={cn('cell')}></span>
    </div>
  );
}

BasketTotal.propTypes = {
  sum: PropTypes.number
};

BasketTotal.defaultProps = {
  sum: 0
}

export default memo(BasketTotal);
