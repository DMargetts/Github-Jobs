import React from "react";
import { connect } from "react-redux";

const Button = ({ search, location, job }) => {
  return (
    <div>
      <button onClick={() => search(location, job)}>Search</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  location: state.searchJobs.location,
  job: state.searchJobs.job,
});

export default connect(mapStateToProps)(Button);
