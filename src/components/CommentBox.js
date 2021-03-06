import React from 'react';
import request from 'superagent';
import { ProgressBar, Well, PageHeader } from 'react-bootstrap';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

var CommentBox = React.createClass({
  getInitialState: function () {
    return {
      comments: []
    }
  },
  componentDidMount: function () {
    request
      .get('https://comment-box-api.herokuapp.com/api/comments')
      .end(function (err, response) {
        this.setState({
          comments: response.body
        });
      }.bind(this))
  },
  render: function () {
    if (this.state.comments.length === 0) {
      return (
        <p><ProgressBar active now={100} label="Loading......" /></p>
      )
    }
    return (
      <div className="comment-box">
        <PageHeader>Comment Box</PageHeader>
        <CommentList comments={this.state.comments}/>
        <CommentForm addComment={this.addComment}/>
      </div>
    );
  },
  addComment: function (newComment) {
    request.post('https://comment-box-api.herokuapp.com/api/comments')
      .set('Content-Type', 'application/json')
      .send(newComment)
      .end(function (err, response) {
        const newComments = this.state.comments.slice();
        newComments.push(response.body)
        this.setState({
          comments: newComments
        });
      }.bind(this));
  }
});

module.exports = CommentBox;
