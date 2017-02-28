import React from 'react';

import Comment from './Comment';

var CommentList = React.createClass({
  render: function () {
    return (
      <div className="comment-list">
        <h2>Comment List</h2>
        {this.renderComments()}
      </div>
    );
  },
  renderComments: function () {
    return this.props.comments.map(function (comment, i) {
      return (
        <Comment key={i} author={comment.author} text={comment.text}/>
      )
    })
  }
});

module.exports = CommentList;
