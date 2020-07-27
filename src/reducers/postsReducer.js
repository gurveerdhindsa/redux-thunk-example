export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_POSTS':
      return { ...state, loading: true };

    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload,
        hasErrors: false,
      };

    case 'GET_POSTS_FAILURE':
        return {
            ...state,
            loading: false,
            hasErrors: true
        }
    default:
      return state;
  }
}
