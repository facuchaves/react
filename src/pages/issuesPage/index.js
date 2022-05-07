import React from "react";
import SearchFormHome from "../../components/SearchForm";
import IssuesList from "../../components/issuesList";
import { searchIssues } from "../../redux/actions";
import { connect } from "react-redux";

const IssuesPage = ({ handleSubmit }) => {
  return (
    <div>
      <SearchFormHome handleSubmit={handleSubmit}/>
      <IssuesList/>
    </div>
  );

};

const mapDispatchToProps = dispatch => ({
  handleSubmit : event => dispatch(searchIssues(event))
})

export default connect(null,mapDispatchToProps)(IssuesPage);
