import React from 'react';
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUIComponent: React.FC = () => {
  return (
    <SwaggerUI url="/api-docs/api" />
  );
};

export default SwaggerUIComponent;
