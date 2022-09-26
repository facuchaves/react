import React from 'react';
// import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SearchForm from '../../components/SearchForm';
import EntitiesList from '../../components/EntitiesList';
// import {searchEntities} from '../../redux/actions';

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

EntitiesPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default EntitiesPage;
