/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Posts from './Posts';
import '../assets/css/main.less';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <h1>Post Headings</h1>
          <Posts />
        </div>
      </div>
    );
  }
}
