import { REQUESTS, LOCATIONSEARCH, JOBSEARCH } from "./constants.js";

const initialState = {
  location: "",
  job: "",
  clicked:
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",
  isPending: false,
  posts: [],
  error: "",
};

export const searchJobs = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOCATIONSEARCH:
      return { ...state, location: action.payload };
    case JOBSEARCH:
      return { ...state, job: action.payload };
    default:
      return state;
  }
};

export const request = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUESTS.FETCH_POSTS_PENDING:
      return { ...state, isPending: true };
    case REQUESTS.FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, isPending: false };
    case REQUESTS.FETCH_POSTS_FAILURE:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
