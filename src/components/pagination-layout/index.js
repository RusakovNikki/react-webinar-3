import React from 'react';
import {cn as bem} from '@bem-react/classname';
import './style.css';
import {returnPaginationRange} from '../../utils';

function PaginationLayout({pages, activePage, onSelectPage}) {
  const cn = bem('Pagination');

  function onSelect(page) {
    onSelectPage(page);
  }

  let array = returnPaginationRange(pages, activePage, 1);

  return (
    <div className={cn()}>
      {array.map(page => {
        return Number(page) ? <a
          className={`${cn('item')} ${activePage === page && cn('active')}`}
          key={page}
          onClick={() => onSelect(page)}
        >{page}</a> : <span key={page}>{page}</span>
      })}
    </div>
  );
}

// Pagination.propTypes = {
//   children: PropTypes.node
// }

export default React.memo(PaginationLayout);
