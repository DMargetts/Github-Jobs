import { REQUESTS, LOCATIONSEARCH, JOBSEARCH } from "./constants.js";

export const jobSearch = (text) => ({
  type: JOBSEARCH,
  payload: text,
});
export const locationSearch = (text) => ({
  type: LOCATIONSEARCH,
  payload: text,
});

export const fetchPosts = (what, job) => (dispatch) => {
  console.log(what, job);
  dispatch({ type: REQUESTS.FETCH_POSTS_PENDING });
  fetch(
    `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${what}&description=${job}`
  )
    .then((resp) => resp.json())
    .then((data) =>
      dispatch({ type: REQUESTS.FETCH_POSTS_SUCCESS, payload: data })
    )
    .catch((err) =>
      dispatch({ type: REQUESTS.FETCH_POSTS_FAILURE, payload: err })
    );
};
