import React, { useEffect } from "react";
import { connect } from "react-redux";
import { jobSearch, locationSearch, fetchPosts } from "./actions";
import Job from "./components/job/Job";
import Input from "./components/input/Input";
import Button from "./components/button/Button";

const App = ({ locationSearch, jobSearch, search }) => {
  const baseUrl =
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <Input onChange={locationSearch} placeholder="location" />
      <Input onChange={jobSearch} placeholder="job" />
      <Button search={search} />
      <Job />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    jobSearch: (e) => dispatch(jobSearch(e.target.value)),
    locationSearch: (e) => dispatch(locationSearch(e.target.value)),
    search: (location, job) => dispatch(fetchPosts(location, job)),
  };
};

export default connect(null, mapDispatchToProps)(App);
