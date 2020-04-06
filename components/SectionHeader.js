import React from 'react';

const SectionHeader = ({ title, description, className }) => (
  <header className={`container center-align section-header ${className}`}>
    <h4>{title}</h4>
    <div className="center-align section-header__border" />
    {description && <p>{description}</p>}
  </header>
);

SectionHeader.defaultProps = {
  title: '',
  description: '',
  className: '',
};

export default SectionHeader;