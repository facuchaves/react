import React from "react";
import SearchForm from "../../components/SearchForm";
import IssuesList from "../../components/IssuesList";
import { searchIssues } from "../../redux/actions";
import { connect } from "react-redux";

const IssuesPage = ({ handleSubmit }) => {
  return (
    <>
      <SearchForm handleSubmit={handleSubmit}/>
      <IssuesList/>
    </>
  );

};

const mapDispatchToProps = dispatch => ({
  handleSubmit : event => dispatch(searchIssues(event))
})

export default connect(null,mapDispatchToProps)(IssuesPage);
