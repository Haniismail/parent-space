import React from 'react';
import { Link } from 'react-router-dom';

const ActionLink = ({ label, icon, className, url, onClickAction }) => {
  return (
    <Link
      to={url || '#'}
      className={`action-link${className != null ? ` ${className}` : ''}`}
      onClick={onClickAction || null}
    >
      <span>{label}</span>
      {icon && icon}
    </Link>
  );
};

export default ActionLink;
