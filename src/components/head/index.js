import {memo} from "react";
import PropTypes from "prop-types";
import './style.css';
import {translate} from '../../utils'
import useSelector from '../../store/use-selector';

function Head({title}) {
  const lang = useSelector((state) => state.lang.lang);

  return (
    <div className='Head'>
      <h1>{translate(lang, title)}</h1>
    </div>
  )
}

Head.propTypes = {
  title: PropTypes.node,
};

export default memo(Head);
