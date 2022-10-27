import {useEffect} from 'react';
import {EntityStatus, getAll} from '../features/entity/entitySlice';
import {useEntityDispatch, useEntitySelector} from './reactReduxHooks';

const useEntities = () => {
  // const [entity, setEntity] = useState({
  //   loading: true,
  //   error: false,
  //   entity: {},
  // } as any);

  // useEffect(() => {
  //   getEntity(entityId)
  //     .then((entityRes) => {
  //       setEntity({loading: false, error: false, entity: entityRes});
  //     })
  //     .catch(() => {
  //       setEntity({loading: false, error: true, entity: {}});
  //     });
  // }, []);

  // return entity;

  const entitiesSelector = useEntitySelector((state) => state.entity);

  const {status, entities} = entitiesSelector;

  const dispatch = useEntityDispatch();

  useEffect(() => {
    if (EntityStatus.IDLE === status) {
      dispatch(getAll());
    }
  }, [entities]);

  return {status, entities, dispatch};
};

export default useEntities;
