import React, { Fragment } from 'react';

const FormMessaging = ({ title, msg }) => (
  <Fragment>
    <h2>{title}</h2>
    <p>{msg}</p>
  </Fragment>
);

export default FormMessaging;
