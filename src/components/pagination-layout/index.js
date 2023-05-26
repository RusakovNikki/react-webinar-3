import React, {useState} from 'react';
import PropTypes from "prop-types";
import {cn as bem} from '@bem-react/classname';
import './style.css';
import {returnPaginationRange} from '../../utils';

function PaginationLayout({pages, onSelectPage}) {
  const [activePage, setActivePage] = useState()

  const cn = bem('Pagination');

  function onSelect(page) {
    onSelectPage(page);
    setActivePage(page);
  }
  console.log('qqq');
  let array = returnPaginationRange(pages, activePage, 1);

  return (
    <div className={cn()}>
      {array.map(page => {
        return <a
          className={`${cn('item')} ${activePage === page && cn('active')}`}
          key={page}
          onClick={() => onSelect(page)}
        >{page}</a>
      })}
    </div>
  );
}

// Pagination.propTypes = {
//   children: PropTypes.node
// }

export default React.memo(PaginationLayout);
