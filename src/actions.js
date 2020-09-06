import { REQUESTS, LOCATIONSEARCH, JOBSEARCH } from "./constants.js";

export const jobSearch = (text) => ({
  type: JOBSEARCH,
  payload: text,
});
export const locationSearch = (text) => ({
  type: LOCATIONSEARCH,
  payload: text,
});

export const fetchPosts = (test) => (dispatch) => {
  console.log(test);
  dispatch({ type: REQUESTS.FETCH_POSTS_PENDING });
  fetch(
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=sf"
  )
    .then((resp) => resp.json())
    .then((data) =>
      dispatch({ type: REQUESTS.FETCH_POSTS_SUCCESS, payload: data })
    )
    .catch((err) =>
      dispatch({ type: REQUESTS.FETCH_POSTS_FAILURE, payload: err })
    );
};
