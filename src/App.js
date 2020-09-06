import React, { useEffect } from "react";
import { connect } from "react-redux";
import { jobSearch, locationSearch, clicked, fetchPosts } from "./actions";

const baseUrl =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

const App = ({
  locationSearch,
  clicker,

  jobSearch,
  data,
}) => {
  // useEffect(() => {
  //   fetch(baseUrl)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="App">
      <input type="text" onChange={locationSearch} placeholder="location" />
      <input type="text" onChange={jobSearch} placeholder="job" />

      <button onClick={clicker}>click me</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    job: state.searchJobs.job,
    location: state.searchJobs.location,
    clicked: state.searchJobs.clicked,
    data: state.request.posts,
    pending: state.request.isPending,
    error: state.request.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    jobSearch: (e) => dispatch(jobSearch(e.target.value)),
    locationSearch: (e) => dispatch(locationSearch(e.target.value)),
    clicker: () => dispatch(fetchPosts("what")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
