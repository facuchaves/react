import React from "react";
import SearchForm from "../../components/SearchForm";
import EntitiesList from "../../components/EntitiesList";
import { searchEntities } from "../../redux/actions";
import { connect } from "react-redux";


const EntitiesPage = ({ handleSubmit }) => (
    <>
      <SearchForm handleSubmit={handleSubmit}/>
      <EntitiesList/>
    </>
  );

const mapDispatchToProps = dispatch => ({
  handleSubmit : event => dispatch(searchEntities(event))
})

export default connect(null,mapDispatchToProps)(EntitiesPage);
