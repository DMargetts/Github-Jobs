import React from "react";
import { connect } from "react-redux";
import "./jobStyle.css";

const Job = ({ data }) => {
  return (
    <div className="jobContainer">
      {data.map((job, i) => {
        return (
          <div className="job" key={i}>
            <h3>{job.title}</h3>
            <p>
              {job.company} - {job.type}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.request.posts,
});

export default connect(mapStateToProps)(Job);
