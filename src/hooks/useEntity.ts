import {useEffect, useState} from 'react';
import {getEntity} from '../services/entityService';

const useEntity = (entityId: number) => {
  const [entity, setEntity] = useState({
    loading: true,
    error: false,
    entity: {},
  } as any);

  useEffect(() => {
    getEntity(entityId)
      .then((entityRes) => {
        setEntity({loading: false, error: false, entity: entityRes});
      })
      .catch(() => {
        setEntity({loading: false, error: true, entity: {}});
      });
  }, []);

  return entity;
};

export default useEntity;
