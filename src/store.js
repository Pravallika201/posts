import { createStore } from "redux";

const initialState = {
  posts: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    case "EDIT_POST":
      return {
        ...state,
        posts: state.posts.map((post, index) =>
          index === action.payload.index ? action.payload.post : post
        ),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
