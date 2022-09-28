import {useEffect, useState} from 'react';
import {getEntity} from '../services/entityService';

const useEntity = (entityId: number) => {
  const [entity, setEntity] = useState({} as any);

  useEffect(() => {
    getEntity(entityId).then((entityRes) => setEntity(entityRes));
  }, []);

  return entity;
};

export default useEntity;
