/* Action Creators */
export const getPosts = () => ({
  type: 'GET_POSTS',
});

export const getPostsSuccess = (posts) => ({
  type: 'GET_POSTS_SUCCESS',
  payload: posts,
});

export const getPostsFailure = () => ({
  type: 'GET_POSTS_FAILURE',
});

/* Asynchronous Thunk */
export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(getPosts());

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data = await response.json();

      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
};
