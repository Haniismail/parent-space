import React from 'react';
// import PropTypes from 'prop-types';

const ViewTitle = ({ title, className }) => {
  return (
    <div className={className ? `view-title ${className}` : 'view-title'}>
      {title != null && <span>{title}</span>}
    </div>
  );
};

ViewTitle.propTypes = {};

export default ViewTitle;
