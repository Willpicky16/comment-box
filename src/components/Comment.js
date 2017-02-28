import React from 'react';

var Comment = React.createClass({
  render: function () {
    return (
      <div className="comment">
        <p><b>{this.props.author}:</b>
        {" "}
        {this.props.text}</p>
      </div>
    )
  }
});

module.exports = Comment;
