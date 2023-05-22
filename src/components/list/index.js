import React from "react";
import PropTypes from 'prop-types';
import ItemList from "../item-list";
import './style.css';

function List({ list, onClickItem, renderListItems }) {
  return (
    <div className='List'>
      {list.map(item =>
        <div key={item.code} className='List-item'>{renderListItems(item, onClickItem)}</div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
  onSelectItem: PropTypes.func
};

List.defaultProps = {
  onDeleteItem: () => { },
  onSelectItem: () => { },
}

export default React.memo(List);
