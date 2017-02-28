import React from 'react';
import { Button, FormControl, ControlLabel, Well } from 'react-bootstrap';

var CommentForm = React.createClass({
  getInitialState: function () {
    return {
      author: '',
      text: ''
    }
  },
  render: function () {
    return (
      <Well>
      <div className="comment-form">
        <h2>What are you thinking?</h2>
        <form onSubmit={this.handleSubmit}>
          <ControlLabel>Name:</ControlLabel>
          <FormControl placeholder="Please Enter Name" type="text" value={this.state.author} onChange={this.handleAuthorChange}/>
          <br></br>
          <ControlLabel>Comment:</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Please Enter Comment" value={this.state.text} onChange={this.handleTextChange}/>
          <br></br>
          <Button bsStyle="success" type="submit">Post Comment</Button>
        </form>
      </div>
      </Well>
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
