import React from 'react';

import Comment from './Comment';

var CommentList = React.createClass({
  render: function () {
    return (
      <div className="comment-list">
        <h2>Comments:</h2>
        {this.renderComments()}
      </div>
    );
  },
  renderComments: function () {
    return this.props.comments.map(function (comment, i) {
      return (
        <Comment key={i} author={comment.author} text={comment.text} date={comment.created_at}/>
      )
    })
  }
});

module.exports = CommentList;
