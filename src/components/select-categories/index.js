import React from 'react';
import './style.css'
import {buildTreeArray} from '../../utils';

const SelectCategories = ({options}) => {
    const treeArray = buildTreeArray(options);

    const renderOptions = (treeArray, indent = 0) => {
        return treeArray.map((option) => {
            let prefix = '';
            for (let i = 0; i < indent; i++) {
                prefix += ' - ';
            }
            const label = `${prefix}${option.title}`;
            const nestedOptions = option.children || [];
            return (
                <React.Fragment key={option._id}>
                    <option value={option._id} >
                        {label}
                    </option>
                    {renderOptions(nestedOptions, indent + 1)}
                </React.Fragment>
            );
        });
    };

    return (
        <select className='SelectCategories'>
            <option value="">Все</option>
            {renderOptions(treeArray)}
        </select>
    );
}

export default SelectCategories
