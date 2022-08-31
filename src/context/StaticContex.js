import React from 'react';

const Context = React.createContext({
  name: 'valor-sin-acceso-al-provider',
  lastName: 'valor-sin-acceso-al-provider',
  isAdult: true,
});

export default Context;
