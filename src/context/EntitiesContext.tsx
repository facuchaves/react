import React, {useState} from 'react';

const Context = React.createContext({} as any);

export const EntitiesContextProvider = ({children}: {children: any}) => {
  const [entities, setEntities] = useState([]);
  const [entity, setEntity] = useState([]);

  return (
    <Context.Provider value={{entities, setEntities, entity, setEntity}}>
      {children}
    </Context.Provider>
  );
};

export default Context;
