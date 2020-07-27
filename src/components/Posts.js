import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const Posts = ({ fetchPosts, loading, posts, hasErrors }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts :(</p>;
    return posts.map((post) => (
      <div key={post.id}>
        <p>{post.title}</p>
      </div>
    ));
  };

  return (
    <section>
      {renderPosts()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

const mapDispatchToProps = {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
