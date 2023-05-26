import React, {useState} from 'react';
import PropTypes from "prop-types";
import {cn as bem} from '@bem-react/classname';
import './style.css';

function PaginationLayout({pages, onSelectPage}) {
  const [activePage, setActivePage] = useState()
  const cn = bem('Pagination');

  function onSelect(page) {
    onSelectPage(page);
    setActivePage(page);
  }

  return (
    <div className={cn()}>
      {pages.map(page => {
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
