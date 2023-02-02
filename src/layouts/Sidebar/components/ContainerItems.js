import { NavLink } from 'react-router-dom';
import React from 'react';
import Chip from '@material-ui/core/Chip';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../slices/modals';

const ContainerItems = ({ item, options, handleDrawerToggle, mobileOpen }) => {
  const dispatch = useDispatch();
  function renderContent() {
    return (
      <>
        <div className="title">
          <img alt={item.name} src={item.icon} />
          <span>{item.name}</span>
        </div>
        {options && (
          <Chip
            color={options.badge ? 'secondary' : 'default'}
            size="small"
            label={options.label}
          />
        )}
      </>
    );
  }

  return (
    <li>
      {item.type === 'route' && (
        <NavLink
          to={item.url}
          exact
          onClick={() => {
            if (mobileOpen === true) {
              handleDrawerToggle();
            }
          }}
        >
          {renderContent()}
        </NavLink>
      )}
      {item.type === 'link' && (
        <a href={item.url} rel="noopener noreferrer">
          {renderContent()}
        </a>
      )}
      {item.type === 'modal' && (
        <div onClick={() => dispatch(openModal(item.url))} aria-hidden="true">
          {renderContent()}
        </div>
      )}
    </li>
  );
};

export default ContainerItems;
