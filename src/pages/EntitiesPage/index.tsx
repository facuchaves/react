import React from 'react';
import {connect} from 'react-redux';
import SearchForm from '../../components/SearchForm';
import EntitiesList from '../../components/EntitiesList';
import {searchEntities} from '../../redux/actions';

const EntitiesPage = ({
  handleSubmit,
}: {
  handleSubmit: (values: any) => void;
}) => (
  <>
    <SearchForm handleSubmit={handleSubmit} />
    <EntitiesList />
  </>
);

const mapDispatchToProps = (
  dispatch: ({type, payload}: {type: string; payload: any}) => void,
) => ({
  handleSubmit: (event: any) => dispatch(searchEntities(event)),
});

export default connect(null, mapDispatchToProps)(EntitiesPage);
