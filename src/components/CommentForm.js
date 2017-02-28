import React from 'react';
import request from 'superagent';

var CommentForm = React.createClass({
  getInitialState: function () {
    return {
      author: '',
      text: ''
    }
  },
  render: function () {
    return (
      <div className="comment-form">
        <h2>What are you thinking?</h2>
        <form onSubmit={this.handleSubmit}>
          <p><label>Name:</label></p>
          <input type="text" value={this.state.author} onChange={this.handleAuthorChange}></input>
          <p><label>Comment:</label></p>
          <textarea value={this.state.text} onChange={this.handleTextChange}></textarea>
          <button type="submit">Post Comment</button>
        </form>
      </div>
    );
  },
  handleSubmit: function (event) {
    event.preventDefault();
    if (this.state.author.length === 0 || this.state.text.length === 0) return

    var newComment = {
      author: this.state.author,
      text: this.state.text
    };
    this.props.addComment(newComment);

    this.setState({
      author: '', text: ''
    })
  },
  handleAuthorChange: function (event) {
    this.setState({
      author: event.target.value
    })
  },
  handleTextChange: function (event) {
    this.setState({
      text: event.target.value
    })
  }
});

module.exports = CommentForm;
